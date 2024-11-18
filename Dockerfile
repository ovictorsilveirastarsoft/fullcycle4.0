FROM node:18-alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@10.0.0

RUN apk add --no-cache curl
RUN curl -sL https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar xz -C /usr/local/bin

USER node

WORKDIR /home/node/app

