import { Sensor, HumiditySensor, UltraRaySensor, TemperatureSensor, SensorFactory } from '@/component';
import { EnvironmentInfoDTO, SensorInfoDTO, SensorListDTO } from '@/entry';

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


  private createDefaultEnvironmentInfoDTO(): EnvironmentInfoDTO {
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

  // factory or strategy???
  public registerSensor(name: string, type: string) {
    const sensor = SensorFactory.getInstance().createSensor(name, type);
    this.sensorList.push(sensor);
    return sensor.getId();
  }

  public fitEnvironmentInfoDTO(dto: EnvironmentInfoDTO, sensor: Sensor) {
    const sensorType = sensor.getDataType();
    const data = sensor.getData();
    if(sensorType === 'humidity'){
      dto.humidity = data;
    }else if(sensorType === 'ultra_ray'){
      dto.ultra_ray = data;
    }else if(sensorType === 'temperature'){
      dto.temperature = data;
    }
  }

  public detect(): EnvironmentInfoDTO {
    const dto: EnvironmentInfoDTO = {}
    for(const sensor of this.sensorList){
      this.fitEnvironmentInfoDTO(dto, sensor)
      // enviroment = sensor.fitEnvironmentInfoDTO(enviroment);
    }
    return enviroment;
  }

  public verify(_id: string): boolean {
    for(const sensor of this.sensorList){
      const field = sensor.toSensorInfoDTO();
      if(field.id === _id){
        return true;
      }
    }
    return false;
  }

}

