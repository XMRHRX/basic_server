
curl -X POST "http://127.0.0.1:3000/component/sensors/test_regist" -H  "accept: application/json" -H  "Content-Type: application/json" -d '{"id": "r48wtMRF2TAsItpbfZ4ARgPtOc6uNNUA", "data": {"humidity": 12, "ultra_ray":23, "temperature":34}}'


curl -X POST "http://127.0.0.1:3000/component/sensors/register" -H  "accept: application/json" -H  "Content-Type: application/json" -d '{"name": "test_regist", "sensorType": ["humidity", "ultra_ray", "temperature"]}'
{"id":"r48wtMRF2TAsItpbfZ4ARgPtOc6uNNUA"}
