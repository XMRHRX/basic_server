import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { EnvironmentInfoDTO } from '@/entry';

@Entity({ name: 'Environment' })
export class Environment  {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  _id?: number;
  @Column({
    type: 'double',
    nullable: true,
    default: ()=>'NULL',
  })
  humidity: number | null;
  @Column({
    type: 'double',
    nullable: true,
    default: ()=>'NULL',
  })
  ultra_ray: number | null;
  @Column({
    type: 'double',
    nullable: true,
    default: ()=>'NULL',
  })
  temperature: number | null;
  @Column({
    type: 'datetime',
    default: ()=> 'now()',
  })
  date: string;

  constructor(param: Environment = {} as Environment){
// humidity: number, ultra_ray: number, _id?: string
    const {
      _id,
      humidity,
      ultra_ray = null,
      temperature = null,
      date
    } = param;
    this._id = _id;
    this.humidity = humidity;
    this.ultra_ray = ultra_ray;
    this.temperature = temperature;
    this.date = date;
  }

  public getEnvironmentInfoDTO(): EnvironmentInfoDTO {
    const param: EnvironmentInfoDTO = {
      humidity: this.humidity,
      temperature: this.temperature,
      ultra_ray: this.ultra_ray,
    };
    return param;
  }
}
