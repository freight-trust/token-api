#!/bin/bash
#Set the working directory to /server
mkdir -p /server
cd server
echo "com.freighttrust" > .namespace

# update the catalog of available components
apt update

#Install curl to get info for later installs
apt-get update && apt-get install -y ca-certificates curl -qq

#configuring debian package repository
# curl needed for this, before installing yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

#installing yarn and nodejs
RUN apt-get update && apt-get install -y yarn nodejs
# execute
yarn
