import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import { HostedZone, ARecord, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { Distribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { join } from 'path';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam/lib/policy-statement';
import { StarPrincipal } from 'aws-cdk-lib/aws-iam/lib/principals';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets/lib/cloudfront-target';

export class HugoWebsiteStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket for website hosting (without public access)
    const websiteBucket = new Bucket(this, 'HugoWebsiteBucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL  // Ensure the bucket is private
    });

    // Route custom domain using Route53
    const domainName = 'growingcode.studio';
    const zone = HostedZone.fromLookup(this, 'HostedZone', { domainName });
    
    // Add CloudFront distribution for better delivery and HTTPS support
    const originAccessIdentity = new OriginAccessIdentity(this, 'OAI');
    websiteBucket.grantRead(originAccessIdentity);
    
    // Create a bucket policy to explicitly allow CloudFront's OAI to read the bucket objects
    websiteBucket.addToResourcePolicy(new cdk.aws_iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [websiteBucket.arnForObjects('*')],  // Allow access to all objects in the bucket
      principals: [originAccessIdentity.grantPrincipal],  // Grant access to the CloudFront OAI
    }));

    const certificateArn = new cdk.aws_certificatemanager.DnsValidatedCertificate(this, 'SiteCertificate', {
      domainName,
      hostedZone: zone,
      region: 'us-east-1',  // Explicitly specify 'us-east-1' region for CloudFront compatibility
    }).certificateArn;
    
    const distribution = new Distribution(this, 'WebsiteDistribution', {
      defaultBehavior: {
        origin: new S3Origin(websiteBucket, { originAccessIdentity }),
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS, 
      },
      domainNames: [domainName],
      certificate: cdk.aws_certificatemanager.Certificate.fromCertificateArn(this, 'SiteCert', certificateArn),
      priceClass: cdk.aws_cloudfront.PriceClass.PRICE_CLASS_100,
    });

    // Create an A record that points to the CloudFront distribution
    new ARecord(this, 'SiteAliasRecord', {
      recordName: domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone,
    });
    
    // Deploy Hugo-generated files to S3 bucket
    new BucketDeployment(this, 'DeployWebsite', {
      sources: [Source.asset(join(__dirname, '../../public'))], // Path to Hugo's public folder
      destinationBucket: websiteBucket,
      distribution, // Invalidate CloudFront cache on updates
      distributionPaths: ['/*'],
    });
  }

}
