FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn
COPY . .
USER node
EXPOSE 3000
CMD ["yarn", "start:dev"]
