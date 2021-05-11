import { ISensor } from '@/entry';

function getID(length: number): string{
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghipqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * 
    charactersLength)));
  }
  return result.join('');
}

export abstract class Sensor {
  protected id: string;
  protected dataType: string;

  constructor(dataType: string){
    this.dataType = dataType;
    this.id = getID(32);
  }

  public abstract detect(): number;
  public abstract getData(): number | null;
  public abstract getDataType(): string;
  public toISensor(): ISensor{
    return {
      id: this.id,
      dataType: this.getDataType(),
      value: this.getData(),
    };
  }
}

export class HumiditySensor extends Sensor {
  private humidity: number | null;
  constructor(){
    super('humidity');
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

}

export class UltraRaySensor extends Sensor {
  private ultra_ray: number | null;
  constructor(){
    super('ultra_ray');
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
}

export class TemperatureSensor extends Sensor {
  private temperature: number | null;
  constructor(){
    super('temperature');
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
}

