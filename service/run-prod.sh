#!/bin/bash
# production command deployment

echo "Init Deployment Starting..."
echo -ne 'Loading#####              (33%)\r'
sleep 1
echo -ne 'Loading##############     (66%)\r'
sleep 1
echo -ne 'Starting##################(100%)\r'
echo -ne '\n'

docker run \
  -e "NODE_ENV=production" -u "node" -m "300M" --memory-swap "1G" -w "/opt/server/app" --name "edi-api-server" node [script]