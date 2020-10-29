FROM node:current-alpine

COPY . /src
WORKDIR /src

COPY package.json /src
COPY package-lock.json /src
RUN npm install --unsafe-perm

ENV NODE_ENV=production

COPY . /src

RUN npm run build

ENV HOST 0.0.0.0

