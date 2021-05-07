import { Sensor } from '@/sensor';

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
      sensor.detect();
    }
  }
}
