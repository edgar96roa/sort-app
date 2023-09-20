# Use node image, latest stabe is 18.17.0 see on https://nodejs.org/es
FROM node:18.17.0-alpine

# Establish working directory in /app
WORKDIR /app

# Copy files from project to working directory
COPY .env ./
COPY package*.json ./
COPY app.js .

# Reads environment value from .env file
ENV PORT=$(cat .env | grep PORT | cut -d '=' -f2)

# Install dependencies on the project
RUN npm install

# Expose 
EXPOSE $PORT
CMD [ "node", "app.js" ]