import { HumiditySensor, UltraRaySensor, TemperatureSensor, Sensor } from '@/component';

export class SensorFactory {

  public static instance: SensorFactory;
    constructor(){
  }

  public static init() {
    if(this.instance === undefined){
      this.instance = new SensorFactory();
    }
  }

  public static getInstance(){
    return this.instance;
  }

  public createSensor(name: string, type: string): Sensor{
    let sensor;
    if(type === 'humidity'){
      sensor = new HumiditySensor(name);
    }else if(type === 'ultra_ray'){
      sensor = new UltraRaySensor(name);
    }else if(type === 'temperature'){
      sensor = new TemperatureSensor(name);
    }else{
      throw new Error('unknow sensor type');
    }
    return sensor;
  }
}
