FROM node:16

WORKDIR /backend/Docker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm start" ]