import { getRepository, Repository, getConnection } from 'typeorm';
import { Environment, EnvironmentInfoDTO } from '@/entry';

export class EnvironmentService {
  private static instance: EnvironmentService;
  private environmentRepo: Repository<Environment>;

  constructor() {
    this.environmentRepo = getRepository(Environment);
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

  public async getById(_id: number): Promise<EnvironmentInfoDTO> {
    const environment: Environment | undefined = await this.environmentRepo.findOne({
      _id: _id
      });
    if(environment === undefined){
      throw new Error();
    }
    return environment.getEnvironmentInfoDTO();
  }

  public async store(humidity: number | null, ultra_ray: number | null, temperature: number | null) {
    this.environmentRepo.insert({
      humidity, temperature, ultra_ray
    });
  }
}
