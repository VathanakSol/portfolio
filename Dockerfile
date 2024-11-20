# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

# Install dependencies
RUN apk add --no-cache libc6-compat

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all other project files to working directory
COPY . .

# If using sharp (as mentioned)
RUN npm install sharp && npm run build

# Run the build process to generate production assets
# RUN npm run build

# Start a new stage from scratch to keep the final image smaller
FROM node:18-alpine

# Install dumb-init and other necessary packages
RUN apk update && apk upgrade && apk add dumb-init && adduser -D nextuser

# Set the working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app ./

# Set the environment variables
ENV HOST=0.0.0.0 \
    PORT=3000 \
    NODE_ENV=production

# Set non-root user
USER nextuser

# Expose the application port
EXPOSE 3000

# Start the application using dumb-init
CMD ["dumb-init", "node", "server.js"]
