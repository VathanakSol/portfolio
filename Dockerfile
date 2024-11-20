# Use an official Node.js runtime as a parent image for the builder stage
FROM node:20-alpine AS builder

# Install dependencies
RUN apk add --no-cache libc6-compat

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all other project files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Start a new stage from scratch to keep the final image smaller
FROM node:18-alpine

# Install dumb-init and other necessary packages
RUN apk update && apk upgrade && apk add --no-cache dumb-init && adduser -D nextuser

# Set the working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app ./

# Set environment variables
ENV HOST=0.0.0.0 \
    PORT=3000 \
    NODE_ENV=production

# Set non-root user
USER nextuser

# Expose the application port
EXPOSE 3000

# Start the application using dumb-init
CMD ["dumb-init", "npm", "start"]