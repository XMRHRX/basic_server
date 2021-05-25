import { getRepository, Repository } from 'typeorm';
import { SensorGroup } from '@/entry';

export class SensorGroupService {
  private static instance: SensorGroupService;
  private sensorGroupRepo: Repository<SensorGroup>;

  private createId(length: number): string {
    const result           = [];
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghipqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
  }

  constructor() {
    this.sensorGroupRepo = getRepository(SensorGroup)
  }

  public static init() {
    if(this.instance === undefined){
      this.instance = new SensorGroupService();
    }
    return this.instance;
  }

  public static getInstance(): SensorGroupService {
    return this.instance;
  }

  public async getById(_id: string): Promise<SensorGroup> {
    const sensorGroup: SensorGroup | undefined = await this.sensorGroupRepo.findOne({
      _id: _id
    });
    if(sensorGroup === undefined){
      throw new Error();
    }
    return sensorGroup;
  }

  public async store(name: string, sensorType: string[]) {
    const _id = this.createId(32);
    const stringSensorType = JSON.stringify(sensorType);
    console.log(stringSensorType);
    await this.sensorGroupRepo.insert({
       _id, name, sensorType: stringSensorType
    });
    return _id;
  }
}

