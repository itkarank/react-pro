# Use official Node.js image as a base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 8070

# Command to run the React app
CMD ["npm", "start"]
