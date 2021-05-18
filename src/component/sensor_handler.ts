import { Sensor, SensorFactory } from '@/component';
import { EnvironmentInfoDTO, SensorListDTO } from '@/entry';

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

  public listSensor(): SensorListDTO {
    const list: SensorListDTO = {sensors: []};
    for(const sensor of this.sensorList) {
      list.sensors.push(sensor.toSensorInfoDTO());
    }
    return list;
  }

  public getSensorById(id: string): Sensor {
    for(const sensor of this.sensorList){
      if(sensor.getId() === id){
        return sensor;
      }
    }
    throw new Error('sensor not exist');
  }

  public registerSensor(name: string, type: string) {
    const sensor = SensorFactory.getInstance().createSensor(name, type);
    this.sensorList.push(sensor);
    return sensor.getId();
  }

  public detect(): EnvironmentInfoDTO {
    let dto: EnvironmentInfoDTO = this.createDefaultEnvironmentInfoDTO();
    for(const sensor of this.sensorList){
      // this.fitEnvironmentInfoDTO(dto, sensor)
      dto = sensor.fitEnvironmentInfoDTO(dto);
    }
    return dto;
  }

}

