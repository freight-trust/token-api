#!/bin/bash
echo -e "\033[1;31m NUKING DOCKER IMAGES && CONTAINERS.. \033[0m"

docker rm --force $(docker ps --all -q)
docker rmi --force $(docker images --all -q)