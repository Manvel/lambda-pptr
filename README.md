# lambda-pptr

Current project is just an experiment for running puppeteer in the AWS Lambda
environment.

## About

- [index.js](./index.js) is the entry point, the code in `handler` function is the
one that is executed when the lambda is invoked.
- Visit [current url](https://epgq5dsmc7.execute-api.us-west-2.amazonaws.com/default/lambda-pptr-experiment-container) to invoke the lambda function.
- The deployment happens automatically each time code lands on `main` branch, see [Deploy step in publish job](.github/workflows/publish.yml).

## Local smoke test

```bash
npm test
```

## AWS setup

<details>
 <summary>Setup Lambda functions and API Gateway</summary>

  ### Step 1 - search for lambda
  ![](./docs/setup-lambda/step1-search-for-lambda.png)

  ### Step 2 - click create function
  ![](./docs/setup-lambda/step2-click-create-function.png)

  ### Step 3 - set function name, click create
  ![](./docs/setup-lambda/step3-set-function-name-click-create.png)

  ### Step 4 - add trigger
  ![](./docs/setup-lambda/step4-add-trigger.png)

  ### Step 5 - select API Gateway, click add
  ![](./docs/setup-lambda/step5-api-gateway.png)

  ### Step 6 - open API Gateway
  ![](./docs/setup-lambda/step6-open-api-gateway.png)

  ### Step 7 - API Gateway setup ready
  ![](./docs/setup-lambda/step7-lambda-setup-ready.png)

</details>


<details>
 <summary>Setup deployment pre-requisites</summary>

  ### Step 1 - search for IAM
  ![](./docs/setup-deployment/step1-search-for-iam.png)

  ### Step 2 - click identity provider
  ![](./docs/setup-deployment/step2-click-identity-provider.png)

  ### Step 3 - click add provider
  ![](./docs/setup-deployment/step3-click-add-provider.png)

  ### Step 4 - setup provider
  ![](./docs/setup-deployment/step4-setup-provider.png)

  ### Step 5 - get ARN
  ![](./docs/setup-deployment/step5-get-arn.png)

  ### Step 6 - search for roles
  ![](./docs/setup-deployment/step6-search-for-roles.png)

  ### Step 7 - create new role
  ![](./docs/setup-deployment/step7-create-new-role.png)

  ### Step 8 - create trusted entity
  ![](./docs/setup-deployment/step8-create-trusted-entity.png)

  ### Step 9 - create new policy
  ![](./docs/setup-deployment/step9-create-new-policy.png)

  ### Step 10 - update function code permission
  ![](./docs/setup-deployment/step10-update-function-code-permission.png)

  ### Step 11 - specify ARN
  ![](./docs/setup-deployment/step11-specify-arn.png)

  ### Step 12 - create policy
  ![](./docs/setup-deployment/step12-create-policy.png)

</details>
