Simple RestAPI with Node & MySQL containers

* look into volumeee

routes: /user/auth user/register

when using endpoint as client -> check status code 200 == ok
EX.
const response = await fetch('http://localhost:3000/user/auth');
console.log(response.status); -> should be 200 if working fine

## Setup

create volume
database: database_name
    table: user


```shell
docker 
```
