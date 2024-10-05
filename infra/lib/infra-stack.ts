import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, BucketAccessControl, BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { Distribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { S3StaticWebsiteOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { join } from 'path';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam/lib/policy-statement';
import { StarPrincipal } from 'aws-cdk-lib/aws-iam/lib/principals';

export class HugoWebsiteStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket for website hosting
    const websiteBucket = new Bucket(this, 'HugoWebsiteBucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      blockPublicAccess: {
        blockPublicAcls: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: false,
        blockPublicPolicy: false,
      },
      accessControl: BucketAccessControl.PUBLIC_READ,  // Ensure public read access
    });

    // websiteBucket.addToResourcePolicy(
    //   new PolicyStatement({
    //     actions: ['s3:GetObject'],
    //     effect: Effect.ALLOW,
    //     principals: [new StarPrincipal()],
    //     resources: [websiteBucket.arnForObjects('*')]
    //   })
    // )

    // Route custom domain using Route53
    const domainName = 'growingcode.studio';
    const zone = HostedZone.fromLookup(this, 'HostedZone', { domainName });

    // Add CloudFront distribution for better delivery and HTTPS support
    const originAccessIdentity = new OriginAccessIdentity(this, 'OAI');
    websiteBucket.grantRead(originAccessIdentity);

    const certificate = new Certificate(this, 'SiteCertificate', {
      domainName,
      validation: CertificateValidation.fromDns(zone),
    });

    const distribution = new Distribution(this, 'WebsiteDistribution', {
      defaultBehavior: {
        origin: new S3StaticWebsiteOrigin(websiteBucket),
      },
      domainNames: [domainName],
      certificate,
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
