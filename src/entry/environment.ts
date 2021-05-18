import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { EnviromentInfoDTO } from '@/entry';

@Entity({ name: 'enviroment' })
export class Environment  {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  protected _id?: number;
  @Column({
    type: 'double',
    unsigned: true,
    nullable: true
  })
  protected humidity: number | null;
  @Column({
    type: 'double',
    unsigned: true,
    nullable: true
  })
  protected ultra_ray: number | null;
  @Column({
    type: 'double',
    unsigned: true,
    nullable: true
  })
  protected temperature: number | null;
  @Column({
    // type: 'double',
    type: 'datetime',
    // unsigned: true,
    // nullable: true
  })
  protected date: Date;

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
    this.date = date || new Date();
  }
  
  public getEnvironmentInfoDTO(): EnviromentInfoDTO {
    const param: EnviromentInfoDTO = {
      humidity: this.humidity,
      temperature: this.temperature,
      ultra_ray: this.ultra_ray,
    };
    return param;
  }
}
