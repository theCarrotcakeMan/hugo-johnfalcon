#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HugoWebsiteStack } from '../lib/infra-stack';

const app = new cdk.App();
new HugoWebsiteStack(app, 'HugoWebsiteStack', {
  env: { account: '842675979065', region: 'us-west-2' },
});