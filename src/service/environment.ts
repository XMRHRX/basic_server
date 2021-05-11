import { getRepository, Repository } from 'typeorm';
import { Environment, StoreEnvironmentDTO } from '@/entry';

export class EnvironmentService {
  private static instance: EnvironmentService;
  private environmentRepo: Repository<Environment>;

  constructor() {
    this.environmentRepo = getRepository(Environment)
  }

  public static init() {
    if(this.instance === undefined){
      this.instance = new EnvironmentService();
    }
    return this.instance;
  }

  public static getInstance(): EnvironmentService {
    return this.instance;
  }

  public async getById(_id: number): Promise<Environment> {
    const environment: Environment | undefined = await this.environmentRepo.findOne({
      _id: _id,
    });
    if(environment === undefined){
      throw new Error();
    }
    return environment;
  }

  // public async getByDate(): Promise<Date> {
    // return new Date;
  // }


  public async store(param: StoreEnvironmentDTO) {
    await this.environmentRepo.insert({
      humidity: param.humidity,
      ultra_ray: param.ultra_ray,
      temperature: param.temperature,
    })
  }
}
