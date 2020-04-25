![](./docker.png)

- [MULTI-COMMAND STYLE](#multi-command-style)
  * [BUILD NODEAPP](#build-nodeapp)
  * [BUILD NGINX](#build-nginx)
- [ONE-COMMAND STYLE](#one-command-style)

# MULTI-COMMAND STYLE

`Dockerfile` is used to create a Docker image, and link whatever you need to the server

## BUILD NODEAPP

```
docker build -t foo/node ./nodeapp
```

```
docker run -d -p 3000:3000 --name node-app foo/node
```

CHECK LOCALHOST TO SEE IF IT IS RUNNING

## BUILD NGINX

CHECK IF THE NGINX IMAGE

```
docker run --rm -p 8000:80 nginx
```

```
docker build -t foo/nginx ./nginx
```

```
docker run -p 8000:80 --link node-app:app --name nginx-proxy foo/nginx
```

# ONE-COMMAND STYLE

By the way, `docker-compose.yml` is used to glue multiple Docker images together or to set parameters for a single Docker image to have a working solution.


```
docker-compose build --force-rm
```

```
docker-compose up -d
```

# EXPRESS

```
docker build --tag whatevername:tag .
```

```
docker container run -p 4010:4000 --name helloworld -e "name=America" -d whatevername:tag
```

```
docker container run -p 4020:4000 --name customized -e "name=Canada" -d whatevername:tag
```

```
docker container run -p 4030:4000 --name backup -e "name=Mexico" -d whatevername:tag
```

```
docker build -t expressnginx:tag .
```

```
docker container run -p 4000:80 -d expressnginx:tag
```

# MYSQL

## Backup

```
docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql
```

## Restore

```
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE
```

# POSGRES

## BACKUP

```
docker exec -t your-db-container pg_dumpall -c -U postgres > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql
```

## RESTORE

```
cat your_dump.sql | docker exec -i your-db-container psql -U postgres
```

```
docker run --name postgres-docker -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

// login

```
psql -U postgres
```

See user permission

```
\du
```

List all database

```
\l
```
Connect to database

```
\c test 
```

```
\dt
```
