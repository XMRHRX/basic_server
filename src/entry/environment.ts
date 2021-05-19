import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { EnvironmentInfoDTO } from '@/entry';

@Entity({ name: 'environment' })
export class Environment  {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  protected _id?: number;
  @Column({
    type: 'double',
    unsigned: true,
    nullable: true
  })
  protected humidity?: number | null;
  @Column({
    type: 'double',
    unsigned: true,
    nullable: true,
    default: null,
  })
  protected ultra_ray?: number | null;
  @Column({
    type: 'double',
    unsigned: true,
    nullable: true,
    default: null,
  })
  protected temperature?: number | null;
  @Column({
    type: 'datetime',
    default: null,
  })
  protected date: string;

  constructor(param: Environment = {} as Environment){
// humidity: number, ultra_ray: number, _id?: string
    const {
      _id,
      humidity,
      ultra_ray,
      temperature,
      date,
    } = param;
    this._id = _id;
    this.humidity = humidity;
    this.ultra_ray = ultra_ray;
    this.temperature = temperature;
    this.date = date || new Date().toString()
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
