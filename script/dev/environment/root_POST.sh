#!/usr/bin/sh
curl -X POST "http://127.0.0.1:3000/environment" -H  "accept: application/json" -H  "Content-Type: application/json" -d '{"humidity": "3"}'
