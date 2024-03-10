## Simple dockerized Express.js & MySQL system


The provided `compose.yaml` composed of 2 services
- Express.js router
- MySQL server


Note: Using **volume** for database persistent storage.

## Environment Overview
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
    - `MYSQL_DATABASE` = *myapp*
    - init file under `mysql_init/`
  
        - ```
          ~$ describe myapp.user;
          +-----------------------+----------+------+-----+---------+-------+
          | Field                 | Type     | Null | Key | Default | Extra |
          +-----------------------+----------+------+-----+---------+-------+
          | user                  | char(32) | NO   | PRI |         |       |
          | authentication_string | text     | YES  |     | NULL    |       |
          +-----------------------+----------+------+-----+---------+-------+
          ```

## Setup

```shell
docker compose up -d
```
This should create a network, a volume, and two containers. Make sure that said volume is empty or does not already exist if you are doing this the first time. Now port `3000` on `localhost` should be listened by the app.


Do the following if a clean reset is needed.
```shell
docker compose down && docker volume rm myapp_mysql_vol
```
And then go back to upping the compose.

## Usage
Supporting `routes` of the current version:
- `/` &ndash; GET
- `/user/auth` &ndash; POST
- `/user/register` &ndash; POST (still a dummy)

Under `test/` is a sample test file requesting `http://localhost:3000/user/auth` route.

> **_NOTE:_** Check the status code of response after fetching &ndash; `200` means good to go.
> ```node
> console.log(response.status);
> ```
