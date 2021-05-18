import { default as Crawler }  from 'crawler';
import { AISettingDTO } from '@/entry';

export class AI {
  private data: any;
  private token: string = 'CWB-021B447A-7581-4875-8BDA-3AF52E29F702';
  private locationName: string = '%E9%9B%B2%E6%9E%97%E7%B8%A3';
  private setting: AISettingDTO = {};

  constructor(){
    // this.setting.Authorization =;
  }

  private prepareQuery(url: string, param: AISettingDTO): string {
    url+='?';
    for(const [key, value] of Object.entries(param)){
      console.log(key, value);
      if(key in param){
        url+=key + '=' + value + '&';
      }
    }
    url.slice(0, -1); // would remove last &
    return url;
  }

  private getData(){
    const url = this.prepareQuery('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091', this.setting);
    let statusCode = -1;
    console.log(`Starting crawler ${url}...`);
    const crawler = new Crawler({});
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
          // var $ = res.$;
          // console.log($);
          // console.log("Crawled: " + $("title").text());
        if(res.statusCode == 200){
          const json = JSON.parse(res.body);
          // var jsonstr = JSON.stringify(json);
          console.log(json.result.fields);
          for(const [key, value] of Object.entries(json.result.fields)){
            console.log("k: ", key);
            console.log();
            console.log("v: ", value);
            console.log('------------');
            console.log();
          }
          return res.body;
        } else {
          throw new Error(`failed with code: ${res.statusCode}: ${res.body}`);
        }
      }
    });
  }

  public predict(){
    const data = this.getData();
    // predict(data);
  }

  public set(param: AISettingDTO = {}){
    this.setting = param;
  }

  // public setLimit(limit?: number){
    // this.setting.limit = limit;
  // }
  // public setOffset(offset?: number){
    // this.setting.offset = offset;

  // }
  // public setFormat(format?: string){
    // this.setting.format = format;
  // }
  // public setLocationName(locationName: string[]){
    // this.setting.locationName = locationName;
  // }
  // public setElementName(elementName?: string[]){
    // this.setting.elementName = elementName;
  // }
  // public setSort(sort?: string){
    // this.setting.sort = sort;
  // }
  // public setStartTime(startTime?: string[]){
    // this.setting.startTime = startTime;
  // }
  // public setDataTime(dataTime?: string[]){
    // this.setting.dataTime = dataTime;
  // }
  // public setTimeFrom(timeFrom?: string){
    // this.setting.timeFrom = timeFrom;
  // }
  // public setTimeTo(timeTo?: string){
    // this.setting.timeTo = timeTo;
  // }

  
}
