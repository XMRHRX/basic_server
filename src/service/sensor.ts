import { getRepository, Repository } from 'typeorm';
import { SensorGroup } from '@/entry';

export class SensorGroupService {
  private static instance: SensorGroupService;
  private sensorGroupRepo: Repository<SensorGroup>;

  private createId(length: number): string {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghipqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++ ) {
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
    // type error so check the tutorial of insert and typeorm
    const _id = this.createId(32);
    await this.sensorGroupRepo.insert({
       _id, name, sensorType
    });
    return _id;
  }
}

