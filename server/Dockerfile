FROM node:14

WORKDIR /usr/src/app
COPY package.json ./

run yarn

COPY . .
CMD ["yarn", "start"]
