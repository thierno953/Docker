# DevOps with Docker and Node.js + Mongodb/Nginx

## Docker commands

- Create docker container using image from Docker Hub

```shell
docker create -it alpine
```

- How to start the docker container

```shell
docker start CONTAINER_ID
```

- How to stop a running container

```shell
docker stop CONTAINER_ID
```

- Deleting a Container

```shell
docker rm CONTAINER_ID
```

- List docker containers

```shell
docker ps
docker container ls
docker ps -a
docker container ls -a
```

- How to create a running container

```shell
docker run -d -it alpine
```

- Creating a named container

```shell
docker run -d -it --name firstcontainer alpine
```

- Kill a container

```shell
docker kill CONTAINER_ID
```

## Master the Docker Commands

- Attaching to the container

```shell
docker attach CONTAINER_ID
```

- How to run commands inside docker container

```shell
docker exec CONTAINER_ID command
```

- List all docker images

```shell
docker images
```

- How to remove docker images

```shell
docker rmi <Image_ID>
```

## Productive Docker Commands

- Copying Contents between Containers and the host file system

```shell
docker cp CONTAINER_ID:/file file
docker cp file CONTAINER_ID:/file
```

- Exposing Ports for Containers

```shell
docker run --name webserver -p 8080:80 nginx
```

- Find the changes in Container

```shell
docker diff CONTAINER_ID
```

- Creating a new Image from Containers

```shell
docker commit CONTAINER_ID REPOSITORY:TAG
```

## Useful Docker Commands

- Add persistent volume to the containers

```shell
docker run -d -it -v $(pwd):/var/www nginx
```

- Monitoring the host for docker containers

```shell
docker events
```

- Inspecting docker image history

```shell
docker history IMAGE_ID
```

- Renaming docker container

```shell
docker rename CONTAINER NEW_NAME
```

## Docker Commands and Networking

- How to restart a docker container

```shell
docker restart CONTAINER_ID
```

- How to list all docker networks

```shell
docker network ls
```

- Create a docker networks

```shell
docker network create NETWORK_NAME
```

- Get detailed information about network

```shell
docker network inspect NETWORK_NAME
```

- How to delete a docker network

```shell
docker network rm NETWORK_NAME
```

- Connect to a docker network

```shell
docker network connect NETWORK_NAME CONTAINER_ID
```

- Disconnect from a docker network

```shell
docker network disconnect NETWORK_NAME CONTAINER_ID
```

- How to delete all un-used network or containers

```shell
docker network prune

docker container prune
```

- Building docker image from docker file

```shell
docker build -t IMAGE_NAME:V1 DOCKERFILE_PATH
```

- Create docker volume

```shell
docker volume create VOLUME_NAME
```

- Removing docker volume

```shell
docker volume rm VOLUME_NAME
```

- Deleting container upon exit

```shell
docker run --rm -it --name deletingcontainer alpine sh
```
