FROM node:21.6.2

WORKDIR /usr/src/app
RUN npm init -y
RUN npm i express@4.18.3 mysql2@3.9.2 cors@2.8.5
COPY lib .

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]