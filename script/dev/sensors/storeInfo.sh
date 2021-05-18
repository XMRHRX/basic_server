#!/usr/bin/sh
ID=$1
DATA_TYPE=$2
VALUE=$3
curl -X POST "http://127.0.0.1:3000/component/sensors/" -H  "accept: application/json" -H  "Content-Type: application/json" -d '{"id": "'$ID'", "humidity": "3"}'






