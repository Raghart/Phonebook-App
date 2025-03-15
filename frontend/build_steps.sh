#!/bin/bash

echo "Build script"

# Trigger deployment
#curl https://api.render.com/deploy/srv-${{ secrets.RENDER_SERVICE_ID }}?key=${{ secrets.RENDER_API_KEY }}

# Install dependencies
npm install

npm audit fix
