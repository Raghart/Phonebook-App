#!/bin/bash

echo "Build script"

# Trigger deployment
curl https://api.render.com/deploy/srv-cvaurit6l47c73a8g9og?key=kkfl6kBFiho
#curl https://api.render.com/deploy/srv-${{ secrets.RENDER_SERVICE_ID }}?key=${{ secrets.RENDER_API_KEY }}

# Install dependencies
npm install