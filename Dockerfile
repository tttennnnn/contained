FROM node:latest

WORKDIR /usr/src/app
RUN npm init -y
RUN npm i express mysql2 cors
COPY lib .

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]