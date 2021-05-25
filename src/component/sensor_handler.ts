import { Sensor, SensorFactory } from '@/component';
import { EnvironmentInfoDTO } from '@/entry';
import { SensorGroupService } from '@/service';

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


  public createDefaultEnvironmentInfoDTO(): EnvironmentInfoDTO {
    const param: EnvironmentInfoDTO = {
      humidity: null,
      ultra_ray: null,
      temperature: null,
    }
    return param
  }

  public getSensorByType(type: string): Sensor {
    for(const sensor of this.sensorList){
      if(sensor.getDataType() === type){
        return sensor;
      }
    }
    throw new Error('sensor not exist');
  }

  public async registerSensor(name: string, sensorsGroup: string[]) {
    for(const sensorName of sensorsGroup){
      const sensor = SensorFactory.getInstance().createSensor(name, sensorName);
      this.sensorList.push(sensor);
    }
    return await SensorGroupService.getInstance().store(name, sensorsGroup)
  }

  // public detect(): EnvironmentInfoDTO {
    // let dto: EnvironmentInfoDTO = this.createDefaultEnvironmentInfoDTO();
    // for(const sensor of this.sensorList){
      // this.fitEnvironmentInfoDTO(dto, sensor)
      // dto = sensor.fitEnvironmentInfoDTO(dto);
    // }
    // return dto;
  // }

}

