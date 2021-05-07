import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

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
    nullable: false,
    default:  () => 'CURRENT_TIMESTAMP',
    type: 'datetime',
  })
  protected date?: Date;


  constructor(param: Environment = {} as Environment){
// humidity: number, ultra_ray: number, _id?: string
    const {
      _id,
      humidity,
      ultra_ray,
      date,
    } = param;
    this._id = _id;
    this.humidity = humidity;
    this.ultra_ray = ultra_ray;
    this.date = date;
  }


}
