import { Sensor, HumiditySensor, UltraRaySensor } from '@/component';

export class SensorHandler {
  private static instance: SensorHandler;
  private sensorList: Sensor[] = [];

  constructor(){}

  public static init() {
    if(this.instance === undefined){
      this.instance = new SensorHandler();
    }
    return this.instance;
  }

  public static getInstance(){
    return this.instance;
  }

  public registerSensor(sensor: Sensor){
    this.sensorList.push(sensor)
  }

  public detect(){
    for(const sensor of this.sensorList){
      const result = sensor.detect();
      if(sensor instanceof HumiditySensor){
      } else if (sensor instanceof UltraRaySensor) {
      }
    }
  }

  public getSensor(type: string): Sensor {
    if(type === 'humidity'){
      return new HumiditySensor();
    }else if(type === 'ultra_ray'){
      return new UltraRaySensor();
    }
    throw new Error('unknow sensor type');
  }
}

export interface IRegisterSensor {
  type: string,
}
