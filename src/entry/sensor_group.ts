import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { EnvironmentInfoDTO } from '@/entry';
import { Sensor } from '@/component'

@Entity({ name: 'sensor_group' })
export class SensorGroup  {
  @PrimaryColumn()
  _id: string;
// { type: 'string', length: 32 }
  @Column({
    type: 'text',
  })
  name: string
  @Column({
    type: 'text',
  })
  sensorType: Array<string>

  constructor(param: SensorGroup = {} as SensorGroup){
// humidity: number, ultra_ray: number, _id?: string
    const {
      _id,
      name,
      sensorType
    } = param;
    this._id = _id;
    this.name = name;
    this.sensorType = sensorType;
  }
  public getId(): string {
    return this._id;
  }

  public getName(): string {
    return this.name;
  }
  public getSensorType(): string[] {
    return this.sensorType;
  }
}
