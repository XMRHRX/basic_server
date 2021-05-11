#!/usr/bin/sh
delayTime=300

while [ 1 ]
do
  curl -X POST \
  "http://127.0.0.1:3000/environment/detect" \
  -H  "accept: application/json"  \
  -H  "Content-Type: application/json"
  sleep $delayTime
done
