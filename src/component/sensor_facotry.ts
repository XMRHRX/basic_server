import { HumiditySensor, UltraRaySensor, TemperatureSensor, Sensor } from '@/component';

export class SensorFactory {

  public static instance: SensorFactory;
  constructor(){

  }

  private createId(length: number): string {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghipqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
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
    const id = this.createId(32);
    if(type === 'humidity'){
      sensor = new HumiditySensor(id, name);
    }else if(type === 'ultra_ray'){
      sensor = new UltraRaySensor(id, name);
    }else if(type === 'temperature'){
      sensor = new TemperatureSensor(id, name);
    }else{
      throw new Error('unknow sensor type');
    }
    return sensor;
  }
}
