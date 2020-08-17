ARG VERSION=latest
FROM node:12
ARG VERSION

LABEL maintainer="Freight Trust <corporate@freighttrust.com>"

# RUN npm install pm2 -g

ENV APP_ID=EDIToken \
    PORT=3000 \
    LOG_LEVEL=debug \
    REQUEST_LIMIT=100kb \
    SESSION_SECRET=mySecret \
    OPENAPI_SPEC=/contract/api/v1/spec \
    OPENAPI_ENABLE_RESPONSE_VALIDATION=false

RUN mkdir -p /opt/server/node_modules/ \
    touch /opt/server/node_modules/.gitkeep \
    mkdir -p /var/www/html/ \
    touch /var/www/html/.gitkeep

RUN apt-get update

RUN apt-get install -y apt-transport-https ca-certificates curl -qq
    
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get install -y yarn

RUN apt-get update && \
    apt-get autoremove --purge && \
    apt-get -y clean

WORKDIR /opt/server

COPY package*.json ./ \
     yarn.lock ./

# For Production use: 
# RUN npm ci --only=production
RUN npm install && npm run-script compile 

COPY . /opt/server

# Expose ports
EXPOSE 80 443 43554 8081 3000

USER node

CMD [ "node", "index.js" ]

# CMD ["pm2-runtime", "start", "pm2.json"]
