import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

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
    type: 'text',
    nullable: true,
  })
  protectionStatus?: string;
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
      protectionStatus,
      date
    } = param;
    this._id = _id;
    this.humidity = humidity;
    this.ultra_ray = ultra_ray;
    this.temperature = temperature;
    this.protectionStatus = protectionStatus
    this.date = date;
  }

  public getHumidity(): number | null {
    return this.humidity;
  }

  public getUltraRay(): number | null {
    return this.ultra_ray;
  }

  public getTemperature(): number | null {
    return this.temperature;
  }

  public getDate(): string {
    return this.date;
  }

  public getProtectionStatus(): string | undefined {
    return this.protectionStatus;
  }

  public getId(): number | undefined {
    return this._id;
  }

}
