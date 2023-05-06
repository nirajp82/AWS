# What is AWS Lambda
AWS Lambda is a compute service that lets you run code without provisioning or managing servers.

![image](https://user-images.githubusercontent.com/61636643/235695984-e7408522-559c-471c-a10c-877f30a7c9d8.png)


# How does AWS Lambda Works?
  Each lambda function run in its own container, So we can think every lambda function as a standalone docker containers. When a function is created, Lambda packages it into a new container and then executes that container on a multi-region cloud clusters of servers managed by AWS. Before the functions start running, Each functions container is allocated its necessary RAM and CPU capacity.
That parameter (RAM) is also configurable in aws lambda.
  
  So when the function finished to running, there is a calculation the allocated ram and the function execution time is multiplied and calculated charge cost for the customer.
  
  So that means customer charge based on the allocated memory and the amount of the execution time the function finished.
AWS Lambda's entire infrastructure layer is managed by AWS.

# AWS Lambda has 3 Invocation Types.
  * Lambda Synchronous Invocation 
  * Lambda Asynchronous Invocation
  * Lambda Event Source Mapping with Polling Invocation

# Key Concepts of AWS Lambda
  * Handler Method: Our function, runs starting at the handler method. It is a best practice to separate the Lambda Handler from your business logic. So you should be separate your, for example, database connections and other pre-loading operations from the handler method. handler the method should be only include your business logic. This is the best practice when writing lambda function.
  * Function: A function is a resource that you can invoke to run your code in Lambda. A function has code to process the events that you pass into the function or that other AWS services send to the function.
  * Trigger: A trigger is a resource or configuration that invokes a Lambda function. Triggers include AWS services that you can configure to invoke a function.
  * Event source mappings: An event source mapping is a resource in Lambda that reads items from a stream or queue and invokes a a function.
  * Execution environment: An execution environment provides a secure and isolated runtime environment for your Lambda function. An execution environment manages the   processes and resources that are required to run the function. So when Lambda is invoking from the other services, The concurrent lambda invocations can be happen and these all execution environment is isolated between each other.
  * Layer: A Lambda layer is a .zip file archive that can contain additional code or other content. A layer can contain libraries, a custom runtime, data, or configuration files.
  Lambda Layers provide a convenient way to package libraries and other dependencies that you can use with your Lambda functions. Using layers reduces the size of uploaded deployment archives and makes it faster to deploy your code. When you have additional packages and dependencies, We can combine into the layer and we can directly use the layer into lambda functions. When you are writing the code. By this way, you can reduce the size of upload deployment and also fast to deploy your lambda functions. Layers also promote code sharing and separation of responsibilities so that you can iterate faster on writing business logics. 
  * Concurrency: Concurrency is the number of requests that your function is serving at any given time. When your function is invoked lambda provisions an instance of it to process the event. When the function code finished running, it can handle another request. So if the function is invoked again, while a request is still being processed, another instance is provisioned and increasing the functions concurrency.
  * Destination: A destination is an AWS resource where Lambda can send events from an asynchronous invocation. So you can configure the destination for events that fail processing like setting to DLQ for Lambda fails.

# AWS Billing
 We only pay for the compute time and there is no charge when your code is not running. Lambda Billing is based on used memory. The number of requests and the execution duration rounded up the nearest 100 millisecond.

















References:
https://www.udemy.com/course/aws-serverless-microservices-lambda-eventbridge-sqs-apigateway/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.US&utm_content=deal4584&utm_term=_._ag_81829991707_._ad_532193842025_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_9002065_._pd__._&matchtype=&gclid=EAIaIQobChMI1JyJ5-nW_gIV2pDVCh0TxQhOEAAYAiAAEgJmfvD_BwE
