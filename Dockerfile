# FROM node:slim AS app
FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}

# WORKDIR /app
COPY package.json index.js ${LAMBDA_TASK_ROOT}
RUN yum install -y amazon-linux-extras
RUN amazon-linux-extras install epel -y
RUN yum install chromium -y

ENV BROWSER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN npm install && npm run build && mv dist/index.js index.js

CMD ["index.handler"]