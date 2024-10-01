#!/bin/bash

source ./config.env

cd frontend/

echo "Installing dependencies"
npm install

echo "Building application"
npm run build

echo "Deleting old deployment"
ssh "${USER_NAME}@${HOST_IP}" "rm -rf ${TARGET_PATH}/*"

echo "Copying new files"
scp -r ./out/* "${USER_NAME}@${HOST_IP}:${TARGET_PATH}"
