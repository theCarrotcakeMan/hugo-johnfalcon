import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import { HostedZone, ARecord, RecordTarget, CnameRecord } from 'aws-cdk-lib/aws-route53';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { join } from 'path';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { CfnOutput } from 'aws-cdk-lib';

export class HugoWebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Route custom domain using Route 53
    const domainName = 'growingcode.studio';
    const zone = HostedZone.fromLookup(this, 'HostedZone', { domainName });

    // Create an S3 bucket for website hosting (private access)
    const websiteBucket = new Bucket(this, 'HugoWebsiteBucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL, // Ensure the bucket is private
    });

    // Add an explicit bucket policy for CloudFront (OAI)
    websiteBucket.addToResourcePolicy(new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['s3:GetObject'],
      resources: [websiteBucket.arnForObjects('*')],
      principals: [new cdk.aws_iam.ServicePrincipal('cloudfront.amazonaws.com')],
    }));

    // Create an SSL certificate for the custom domain in 'us-east-1'
    const certificate = new acm.Certificate(this, 'SiteCertificate', {
      domainName: domainName,
      validation: acm.CertificateValidation.fromDns(zone),  // Validate ownership via DNS
    });

    // CloudFront distribution pointing to the S3 bucket
    const distribution = new Distribution(this, 'WebsiteDistribution', {
      defaultBehavior: {
        origin: new S3Origin(websiteBucket), // Use S3Origin for secure access
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      domainNames: [domainName, `www.${domainName}`],
      certificate,
    });

    // Create an A record pointing the root domain to CloudFront distribution
    new ARecord(this, 'SiteAliasRecord', {
      zone,
      recordName: domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });

    // Create an A record for 'www' subdomain pointing to the CloudFront distribution
    new ARecord(this, 'WWWAliasRecord', {
      zone,
      recordName: 'www',
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });

    // Deploy Hugo site to the S3 bucket
    new BucketDeployment(this, 'DeployWebsite', {
      sources: [Source.asset(join(__dirname, '../../public'))], // Hugo's public folder
      destinationBucket: websiteBucket,
      distribution, // Invalidate CloudFront cache after deployment
      distributionPaths: ['/*'],
    });

    new CfnOutput(this, 'CloudFrontURL', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'URL of the deployed website',
    });
    

  }
}