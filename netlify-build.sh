#!/bin/bash

# Print Node.js version for debugging
echo "Using Node.js version: $(node -v)"
echo "Using npm version: $(npm -v)"

# Clean install of dependencies
echo "Installing dependencies..."
npm ci

# Run the build
echo "Building the Next.js app..."
npm run build

# Success message
echo "Build completed successfully!"
