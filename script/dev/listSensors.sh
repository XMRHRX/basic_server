#!/usr/bin/sh
curl -X GET \
"http://127.0.0.1:3000/component/sensors/list" \
-H  "accept: application/json"  \
-H  "Content-Type: application/json"
