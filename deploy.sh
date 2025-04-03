#!/bin/bash

# Path ke Backend & Frontend
BACKEND_DIR="/var/www/html/deployment-noted/backend"
FRONTEND_DIR="/var/www/html/deployment-noted/frontend"

echo "Starting deployment process..."

# Update & Restart Backend
echo "Updating Backend..."
cd $BACKEND_DIR || exit
git pull origin main
npm install
npx sequelize db:migrate
pm2 restart all
echo "Backend updated successfully!"

# Update & Build Frontend
echo "Updating Frontend..."
cd $FRONTEND_DIR || exit
git pull origin main
npm install
npm run build
echo "Frontend built successfully!"

echo "Deployment completed!"
