## Simple dockerized Express.js & MySQL container system


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
    - `MYSQL_ROOT_PASSWORD` = *rootpw*
    - `MYSQL_USER` = *user*
    - `MYSQL_PASSWORD` = *userpw*
    - `MYSQL_DATABASE` = *db_name*
        - Table is in the following format

## MySQL Database
`MYSQL_ROOT_PASSWORD`

## Quick Setup
create volume
database: database_name
    table: user


```shell
docker 
```

## Usage
Supporting `routes` of the current version:
- `/user/auth` &ndash; GET
- `/user/register` &ndash; POST

Both routes with JSON body
```json
"user": "...", "authStr": "..."
```

### Fetching
```node
const response = await fetch('http://localhost:3000/user/register', {
    method: "POST",
    body: {
        user: "...",
        authStr: "..."
    }
});
```
> **_NOTE:_**  It is recommended to always check the status code of response after fetching &ndash; `200` means good to go.
> ```node
> console.log(response.status);
> ```
