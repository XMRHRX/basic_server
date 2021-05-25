import { EnvironmentInfoDTO, SensorInfoDTO } from '@/entry';

export abstract class Sensor {
  protected dataType: string;

  constructor(dataType: string, name: string){
    this.dataType = dataType;
  }

  public abstract getData(): number | null;
  public abstract getDataType(): string;
}

export class HumiditySensor extends Sensor {
  private humidity: number | null;
  constructor(name: string){
    super('humidity', name);
    this.humidity = null;
  }
  public getData(){
    return this.humidity;
  }
  public getDataType(){
    return this.dataType;
  }

}

export class UltraRaySensor extends Sensor {
  private ultra_ray: number | null;
  constructor(name: string) {
    super('ultra_ray', name);
    this.ultra_ray = null;
  }
  public getData(){
    return this.ultra_ray;
  }
  public getDataType(){
    return this.dataType;
  }
}

export class TemperatureSensor extends Sensor {
  private temperature: number | null;
  constructor(name: string){
    super('temperature', name);
    this.temperature = null;
  }
  public getData(){
    return this.temperature;
  }
  public getDataType(){
    return this.dataType;
  }
}

