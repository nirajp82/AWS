# What is AWS Lambda
AWS Lambda is a compute service that lets you run code without provisioning or managing servers.

![image](https://user-images.githubusercontent.com/61636643/235695984-e7408522-559c-471c-a10c-877f30a7c9d8.png)


# How does AWS Lambda Works?
  Each lambda function run in its own container, So we can think every lambda function as a standalone docker containers. When a function is created, Lambda packages it into a new container and then executes that container on a multi-region cloud clusters of servers managed by AWS. Before the functions start running, Each functions container is allocated its necessary RAM and CPU capacity.
That parameter (RAM) is also configurable in aws lambda.
  
  So when the function finished to running, there is a calculation the allocated ram and the function execution time is multiplied and calculated charge cost for the customer.
  
  So that means customer charge based on the allocated memory and the amount of the execution time the function finished.
AWS Lambda's entire infrastructure layer is managed by AWS.

# AWS Billing
 We only pay for the compute time and there is no charge when your code is not running. Lambda Billing is based on used memory. The number of requests and the execution duration rounded up the nearest 100 millisecond.

















References:
https://www.udemy.com/course/aws-serverless-microservices-lambda-eventbridge-sqs-apigateway/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.US&utm_content=deal4584&utm_term=_._ag_81829991707_._ad_532193842025_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_9002065_._pd__._&matchtype=&gclid=EAIaIQobChMI1JyJ5-nW_gIV2pDVCh0TxQhOEAAYAiAAEgJmfvD_BwE
