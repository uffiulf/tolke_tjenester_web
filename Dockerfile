# Use official Node.js image as base
FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY . . 


# Expose port
EXPOSE 3000:3000

# Start the app
CMD ["node", "server.js"]
