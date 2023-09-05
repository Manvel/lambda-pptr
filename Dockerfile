# FROM node:slim AS app
FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}

# WORKDIR /app
COPY package.json index.js ${LAMBDA_TASK_ROOT}
ADD https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm chrome.rpm
RUN yum install -y ./chrome.rpm

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN npm install && npm run build && mv dist/index.js index.js

CMD ["index.handler"]