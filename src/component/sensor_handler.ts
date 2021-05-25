import { EnvironmentInfoDTO } from '@/entry';
import { SensorSocket } from '@/component'

export class SensorHandler {
  private static instance: SensorHandler;

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

  public detect(): EnvironmentInfoDTO {
    const sensorSocket = new SensorSocket();
    const failed = sensorSocket.signalSensor();
    console.log(failed);
    // if(success === false){
      // return {};
    // }
    return {
      humidity: 1,
      ultra_ray: null,
      temperature: 5,
    };
  }

}

