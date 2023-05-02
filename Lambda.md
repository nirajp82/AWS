# What is AWS Lambda

# How does AWS Lambda Works?
  Each lambda function run in its own container, So we can think every lambda function as a standalone docker containers. When a function is created, Lambda packages it into a new container and then executes that container on a multi-region cloud clusters of servers managed by AWS. Before the functions start running, Each functions container is allocated its necessary RAM and CPU capacity.
That parameter (RAM) is also configurable in aws lambda.
  
  So when the function finished to running, there is a calculation the allocated ram and the function execution time is multiplied and calculated charge cost for the customer.
  
  So that means customer charge based on the allocated memory and the amount of the execution time the function finished.
AWS Lambda's entire infrastructure layer is managed by AWS.
