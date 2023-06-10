
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



References: 
https://docs.aws.amazon.com/cdk/






