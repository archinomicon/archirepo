# Base stage for building the static files
FROM node:lts AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# run d2 install script
RUN curl -fsSL https://d2lang.com/install.sh | sh -s --
  
COPY . .
RUN npm run build
