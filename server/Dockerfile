FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

ARG DATABASE_URL
ARG SESSION_KEY
ENV DATABASE_URL=$DATABASE_URL
ENV SESSION_KEY=$SESSION_KEY

EXPOSE 3001

CMD ["npm", "run", "start"]