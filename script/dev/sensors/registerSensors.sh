#/usr/bin/sh
POST_DATA='{"type": "'$1'"}';
echo $POST_DATA;
curl -X POST "http://127.0.0.1:3000/component/sensors/register" -H  "accept: application/json" -H  "Content-Type: application/json"\
  -d "$POST_DATA"

