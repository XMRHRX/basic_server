import { getRepository, Repository } from 'typeorm';
import { Environment, StoreEnvironmentDTO, EnvironmentInfoDTO } from '@/entry';

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
      _id: _id
    });
    if(environment === undefined){
      throw new Error();
    }
    return environment;
  }

  public async store(humidity: number | null, ultra_ray: number | null, temperature: number | null) {
    await this.environmentRepo.insert({
      humidity, ultra_ray, temperature
    });
  }
}
