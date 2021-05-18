import { EnvironmentInfoDTO, SensorInfoDTO } from '@/entry';

export abstract class Sensor {
  protected id: string;
  protected name: string;
  protected dataType: string;

  constructor(id: string, dataType: string, name: string){
    this.id = id
    this.dataType = dataType;
    this.name = name;
  }

  public abstract detect(): number;
  public abstract getData(): number | null;
  public abstract getDataType(): string;
  public abstract fitEnvironmentInfoDTO(env: EnvironmentInfoDTO): EnvironmentInfoDTO;
  public getId(){ return this.id; };
  public toSensorInfoDTO(): SensorInfoDTO {
    return {
      id: this.id,
      dataType: this.getDataType(),
      value: this.getData(),
    };
  }
}

export class HumiditySensor extends Sensor {
  private humidity: number | null;
  constructor(id: string, name: string){
    super(id, 'humidity', name);
    this.humidity = null;
  }
  public detect() {
    /* implement */
    return 0;
  }
  public getData(){
    return this.humidity;
  }
  public getDataType(){
    return this.dataType;
  }

  public fitEnvironmentInfoDTO(env: EnvironmentInfoDTO): EnvironmentInfoDTO{
    env.humidity = this.getData();
    return env;
  }

}

export class UltraRaySensor extends Sensor {
  private ultra_ray: number | null;
  constructor(id: string, name: string) {
    super(id, 'ultra_ray', name);
    this.ultra_ray = null;
  }
  public detect() {
    /* implement */
    return 0;
  }
  public getData(){
    return this.ultra_ray;
  }
  public getDataType(){
    return this.dataType;
  }
  public fitEnvironmentInfoDTO(env: EnvironmentInfoDTO): EnvironmentInfoDTO{
    env.ultra_ray = this.getData();
    return env;
  }
}

export class TemperatureSensor extends Sensor {
  private temperature: number | null;
  constructor(id: string, name: string){
    super(id, 'temperature', name);
    this.temperature = null;
  }
  public detect() {
    /* implement */
    return 0;
  }
  public getData(){
    return this.temperature;
  }
  public getDataType(){
    return this.dataType;
  }
  public fitEnvironmentInfoDTO(env: EnvironmentInfoDTO): EnvironmentInfoDTO{
    env.temperature = this.getData();
    return env;
  }
}

