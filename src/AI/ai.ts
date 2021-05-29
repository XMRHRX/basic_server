import { default as Crawler }  from 'crawler';
import { AISettingDTO, RangeCropInfoDTO, Crop } from '@/entry';
import { CropService } from '@/service';

export class AI {
  private data: any;
  private token: string = 'CWB-021B447A-7581-4875-8BDA-3AF52E29F702';
  private locationName: string = '%E9%9B%B2%E6%9E%97%E7%B8%A3';
  private setting: AISettingDTO = {};

  constructor(){}

  private prepareQuery(url: string, param: AISettingDTO): string {
    url+='?'+'Authorization='+this.token+"&locationName="+this.locationName+"&";
    for(const [key, value] of Object.entries(param)){
      if(key in param){
        url+=key + '=' + value + '&';
      }
    }
    url.slice(0, -2); // would remove last &
    return url;
  }

  private unwrapApiResponse(data: any){
    console.log("data> ", data)
    const locationList = data.records.locations;
    console.log("locationList: ", locationList)
    const location = locationList[0];
    console.log("location> ", location)
    const weatherList = location.location[0].weatherElement;
    console.log("weatherList> ", weatherList)
    return weatherList;
  }

  private getRange(data: any): RangeCropInfoDTO {
    const result: RangeCropInfoDTO = { max: -999, min: 999 };
    for(const obj of data){
      try{
        console.log(obj);
        const value = parseInt(obj['elementValue'][0]['value']);
        console.log(value)
        if(value > result.max) result.max = value
        if(value < result.min) result.min = value
      }catch(e){
        console.log('error in getHumidityRange:', e);
      }
    }
    return result;
  }

  private async getData(): Promise<any> {
    const url = this.prepareQuery('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091', this.setting);
    console.log(url);
    let statusCode = -1;
    console.log(`Starting crawler ${url}...`);
    const crawler = new Crawler({});
    return await new Promise((resolve, reject)=>{
      crawler.direct({
        url: url,
        method: 'GET',
        maxConnections: 1,
        options: {
          retried: 1
        },
        callback: (error: any, res: any) => {
          console.log(res.options);
          if(error){
            console.log(error);
          }
          if(res.statusCode == 200){
            const json = JSON.parse(res.body);
            // console.log(json)
            // console.log(json.result.fields);
            // for(const [key, value] of Object.entries(json.result.fields)){ }
            resolve(json);
          } else {
            throw new Error(`failed with code: ${res.statusCode}: ${res.body}`);
          }
        }
      });
    }).then((data)=>{
      return data;
    }).catch((e)=>{
      console.log(e);
    })
  }

  public async predict(): Promise<Crop[]> {
    const data = await this.getData();
    const weatherList = this.unwrapApiResponse(data);
    let humidityRange: RangeCropInfoDTO = { max: -999, min: 999 };
    let ultraRayRange: RangeCropInfoDTO = { max: -999, min: 999 };
    let temperatureRange: RangeCropInfoDTO = { max: -999, min: 999 };
    for(const element of weatherList) {
      const name = element.elementName
      const valueList = element['time'];
      console.log(name)
      if(name === 'MinT'){
        temperatureRange.min = this.getRange(valueList).min;
      }else if(name === 'MaxT'){
        temperatureRange.max = this.getRange(valueList).max;
      }else if(name === 'UVI'){
        ultraRayRange = this.getRange(valueList);
      }else if(name === 'RH'){
        humidityRange = this.getRange(valueList);
      }
    }
    console.log("hu: ", humidityRange)
    console.log("ult: ", ultraRayRange)
    console.log("temperatureRange: ", temperatureRange)
    // const crops = await CropService.getInstance().getByRange(humidityRange, ultraRayRange, temperatureRange);
    const crops = await CropService.getInstance().getByMidRange(humidityRange, ultraRayRange, temperatureRange);
    console.log(crops);
    return crops;
  }

  public set(param: AISettingDTO = {}){
    this.setting = param;
  }
}
