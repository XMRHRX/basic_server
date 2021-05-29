import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { RangeCropInfoDTO } from '@/entry';

@Entity({ name: 'Crop' })
export class Crop  {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  _id?: number;
  @Column({
    type: 'text'
  })
  name: string;
  @Column({
    type: 'text'
  })
  season: string
  @Column({
    type: 'double',
  })
  max_humidity: number;
  @Column({
    type: 'double',
  })
  min_humidity: number;
  @Column({
    type: 'double',
  })
  max_ultra_ray: number;
  @Column({
    type: 'double',
  })
  min_ultra_ray: number;
  @Column({
    type: 'double',
  })
  max_temperature: number;
  @Column({
    type: 'double',
  })
  min_temperature: number;

  constructor(param: Crop = {} as Crop){
// humidity: number, ultra_ray: number, _id?: string
    const {
      _id,
      name,
      season,
      max_humidity,
      min_humidity,
      max_ultra_ray,
      min_ultra_ray,
      max_temperature,
      min_temperature,
    } = param;
    this._id = _id;
    this.name = name;
    this.season = season;
    this.max_humidity = max_humidity;
    this.min_humidity = min_humidity;
    this.max_ultra_ray = max_ultra_ray;
    this.min_ultra_ray = min_ultra_ray;
    this.max_temperature = max_temperature;
    this.min_temperature = min_temperature;
  }

  public getName(): string {
    return this.name;
  }

  public getSeason(): string {
    return this.season;
  }

  public getHumidity(): RangeCropInfoDTO {
    return {
      max: this.max_humidity,
      min: this.min_humidity,
    }
  }

  public getUltraRay(): RangeCropInfoDTO {
    return {
      max: this.max_ultra_ray,
      min: this.min_ultra_ray,
    }
  }

  public getTemperature(): RangeCropInfoDTO {
    return {
      max: this.max_temperature,
      min: this.min_temperature,
    }
  }
}
