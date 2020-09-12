FROM node:lts

# RUN apk add --update nodejs npm

RUN npm install -g @angular/cli

WORKDIR /app