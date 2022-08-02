#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CustomerCrudCdkApp01Stack } from '../lib/customer-crud-cdk-app-01-stack';

const app = new cdk.App();
new CustomerCrudCdkApp01Stack(app, 'CustomerCrudCdkApp01Stack');
