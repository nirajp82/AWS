import * as cdk from 'aws-cdk-lib';
import { Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'LambdaQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const helloFunc = new Function(this, "HelloHander", {
        runtime =  Runtime.NODEJS_14_X,
        code = Code.fromAsset("function"),
        
    });
  }
}
