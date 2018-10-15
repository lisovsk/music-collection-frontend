FROM node:9.11.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

ENV PORT 8081
ENV NODE_PORT 8081

CMD ["npm", "run", "serve"]