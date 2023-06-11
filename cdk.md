
# Command

### NPM
* `npm install -g aws-cdk@latest` :  Install or update the CDK cli to latest version
* `npm run build`: compile typescript to js
* `npm run watch`: watch for changes and compile
* `npm run test`: perform the jest unit tests
* `npm install -g typescript`: Install TypeScript

### CDK
* `cdk init app --language typescript`: Initialise the code
* `cdk ls`: List the different stacks
* `cdk synth $STACK_NAME`: See what the Cloudformation template will look like
* `cdk diff $STACK_NAME`: Check the diff between what is currently deployed and what is currently declared in the code
* `cdk deploy $STACK_NAME`: Deploy the stack
* `cdk destroy $STACK_NAME`: Destroy the stack

### AWS 
* `msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi /qn`: Download and run the AWS CLI MSI installer for Windows 
* `AWS CONFIGURE`: Configure AWS CLI %userprofile%\.aws

# CDK Concepts
* **Constructs**: Constructs are the basic building blocks of AWS CDK apps. A construct represents a "cloud component" and encapsulates everything AWS CloudFormation needs to create the component.
  
  A construct can represent a single AWS resource, such as an Amazon Simple Storage Service (Amazon S3) bucket. A construct can also be a higher-level abstraction consisting of multiple related AWS resources. Examples of such components include a worker queue with its associated compute capacity, or a scheduled job with monitoring resources and a dashboard.
  
  The AWS CDK includes the AWS Construct Library, which contains constructs representing AWS resources.
  
* **Apps**: All constructs that represent AWS resources must be defined, directly or indirectly, within the scope of a Stack construct. An App is a container for one or more stacks.  App is represented by the AWS CDK class App. 

* **Stacks**: The unit of deployment in the AWS CDK is called a stack. All AWS resources defined within the scope of a stack, either directly or indirectly, are provisioned as a single unit.

    Because AWS CDK stacks are implemented through AWS CloudFormation stacks, they have the same limitations as in AWS CloudFormation.   
# Lifecycle of the CDK Application.
The following diagram shows the phases that the AWS CDK goes through when you call the cdk deploy. This command deploys the resources that your app defines.

![image](https://github.com/nirajp82/AWS/assets/61636643/c2239816-61cf-405b-9e02-4c9de7dad948)

    
The `cdk.json` file tells the CDK Toolkit how to execute your app.




References: 
https://docs.aws.amazon.com/cdk/







