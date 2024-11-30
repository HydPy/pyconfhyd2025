# Base image
FROM node:20-alpine

# Set working directory 
WORKDIR /pyconfhyd2025

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3000

# Use CMD to run the development server
CMD ["npm", "run", "dev"]