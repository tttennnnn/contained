Simple RestAPI with Node & MySQL containers

* look into volumeee

routes: /user/auth user/register

when using endpoint as client -> check status code 200 == ok
EX.
const response = await fetch('http://localhost:3000/user/auth');
console.log(response.status); -> should be 200 if working fine

This repository ⛺ provides `compose.yaml` composed of 2 services
- Express.js App
- MySQL Server

Here, I am using **volume** for the database service. This can also be done with a bind mount or without any persistent storage at all.

## Environment
- Express.js
    - node:21.6.2
    - ```json
      "dependencies": {
          "cors": "^2.8.5",
          "express": "^4.18.3",
          "mysql2": "^3.9.2"
      }
      ```
- MySQL
    - mysql/mysql-server:8.0.32
    - `MYSQL_ROOT_PASSWORD`: *rootpw*
    - `MYSQL_USER`: *user*
    - `MYSQL_PASSWORD`: *userpw*
    - `MYSQL_DATABASE`: *db_name*
    - 

## MySQL Database
`MYSQL_ROOT_PASSWORD`

## Setup
create volume
database: database_name
    table: user


```shell
docker 
```
