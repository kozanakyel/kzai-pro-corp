#!/bin/bash

DOCKER_COMPOSE_FILE=docker-compose.yml
DOCKER_SERVICE_NAME="next-supa-base"

cd /home/next-supa-base

docker-compose -f $DOCKER_COMPOSE_FILE pull
docker-compose -f $DOCKER_COMPOSE_FILE stop $DOCKER_SERVICE_NAME
docker-compose -f $DOCKER_COMPOSE_FILE build
docker-compose -f $DOCKER_COMPOSE_FILE up -d $DOCKER_SERVICE_NAME nginx

docker rmi $(docker images -f "dangling=true" -q) 2>/dev/null

