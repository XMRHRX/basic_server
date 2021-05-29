
invariants

----- front -----:
class Name: AI
ID: 3
Type: 
Description:
  Store the API key and setting, to get the response from AI API,
  with functions that can setting, then prepare query for sending, and the getData function would
  send a request with the query and waiting to receive resposnse from API.
  After receive the resposnse, unwrapApiResponse function would ignore the useless part and
  get the data from it.
  Finally, AI class would get crops data from database,
  and compare what are the right crops to grow

Associated Use Case:
  Check Analysis Results



Responsibilities: => Collaborators:
  unwrapApiResponse => 
  prepareQuery => 
  getData => Crawler
  predict => CropService
  getRange => 
  set => 

  AIController(caller)
  CropService
  Crawler

 
----- back -----: 

Attribute: 
data: (1...1)(object)
token: (1...1)(string) {new RegExp("([A-Z]{3}-[0-9a-zA-Z]{8}(-[0-9]{4}){2}-[0-9A-Z]{4}-[0-9A-Z]{12})$").test(token)}
locationName(1...1)(string) {url encoded}
setting (1...1)(object)

Relationships(a-kind-of):
Aggregation(has-parts): 
Other associations:
  crawler {0...*}
  CropService {0...1}
  AIController {1...1}
 






---


Pre- and Post- conditions

method name: AI.predict
class name: AI
ID: 3
clients (consumer): AIController
Associated Use Case: AIController.predict
Description of responsibilities:
  Get the environment information that sensor generate from database,
  and with the data to predict the recommend crops to grow

Arguments Received: humidity: unsigned double, ultra_ray: unsigned double, temperature: double
Type of value Returned: Array<Crops>
Pre-Conditions: if(humidity >= 0 && ultra_ray >= 0)
Post-Conditions: len(cropList) >= 0



