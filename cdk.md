
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
  
  * Representations of AWS resources
  * Can form a hierarchical tree structure

  The AWS CDK includes the AWS Construct Library, which contains constructs representing AWS resources.
  
  ![image](https://github.com/nirajp82/AWS/assets/61636643/801e368a-7710-4f7d-a330-8996c4987ac4)

* **Apps**: All constructs that represent AWS resources must be defined, directly or indirectly, within the scope of a Stack construct. An App is a container for one or more stacks.  App is represented by the AWS CDK class App. 
  * Executable program
  * Used to render and deploy cfn templates 

* **Stacks**: The unit of deployment in the AWS CDK is called a stack. All AWS resources defined within the scope of a stack, either directly or indirectly, are provisioned as a single unit.
  *  Deployable unit
  *  Knows about region and account
  
    Because AWS CDK stacks are implemented through AWS CloudFormation stacks, they have the same limitations as in AWS CloudFormation.   
# Lifecycle of the CDK Application.
  * CDK (with help of AWS CLI) compiles its 'App' (App is the executable program that contains Stacks and Constructs 
  * CDK synthesizes the code to convert it into CloudFormation template. When you run cdk deploy the code we placed in lib/<code_name>.ts is parsed by the CDK Framework which then generates a CloudFormation template located in the cdk.out folder and finally deploys it to CloudFormation.
  * CloudFormation template gets deployed in AWS account and runs to create all the AWS components
  
![image](https://github.com/nirajp82/AWS/assets/61636643/fc50b497-5ba6-4204-855e-98e05bd34db6)

    
The `cdk.json` file tells the CDK Toolkit how to execute your app.




References: 
https://docs.aws.amazon.com/cdk/
https://dev.to/aws-builders/everything-about-aws-cdk-489m







