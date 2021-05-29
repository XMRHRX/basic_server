

method: GET
url: /ai
parameter: no
response: a array of crops(might be empty array)
[
  {

  }
]


---

method GET
url: /environment/detect
parameter: no
response: a json object
{
    "humidity": <number>,
    "ultra_ray": <number>,
    "temperature": <number>,
}


