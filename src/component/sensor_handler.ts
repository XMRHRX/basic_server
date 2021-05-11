import { Sensor, HumiditySensor, UltraRaySensor, TemperatureSensor } from '@/component';
import { ISensor, IEnviroment } from '@/entry';

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

  public listSensor(): ISensor[] {
    const list: ISensor[] = [];
    for(const sensor of this.sensorList){
      list.push(sensor.toISensor());
    }
    return list;
  }

  public getSensor(type: string): Sensor {
    if(type === 'humidity'){
      return new HumiditySensor();
    }else if(type === 'ultra_ray'){
      return new UltraRaySensor();
    }
    throw new Error('unknow sensor type');
  }

  public registerSensor(sensor: Sensor){
    this.sensorList.push(sensor)
  }

  public detect(): IEnviroment{
    const enviroment: IEnviroment = {
      humidity: null,
      ultra_ray: null,
      temperature: null,
    }
    for(const sensor of this.sensorList){
      if(sensor instanceof HumiditySensor){
        enviroment.humidity = sensor.getData();
      } else if (sensor instanceof UltraRaySensor) {
        enviroment.ultra_ray = sensor.getData();
      } else if (sensor instanceof TemperatureSensor) {
        enviroment.temperature = sensor.getData();
      } else {
        throw new Error('unexpected instance type');
      }
    }
    return enviroment;
  }

}

