![](./docker.png)

- [MULTI-COMMAND STYLE](#multi-command-style)
  * [BUILD NODEAPP](#build-nodeapp)
  * [BUILD NGINX](#build-nginx)
- [ONE-COMMAND STYLE](#one-command-style)

# MULTI-COMMAND STYLE

Dockerfile is used to create a Docker image, and link whatever you need to the server

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

By the way, docker-compose.yml is used to glue multiple Docker images together or to set parameters for a single Docker image to have a working solution.


```
docker-compose build --force-rm
```

```
docker-compose up -d
```

