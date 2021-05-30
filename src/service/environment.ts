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
  public async getMostRecnetly(): Promise<Environment> {
    try{
      const environment = await this.environmentRepo
        .createQueryBuilder('env') //alias
        .orderBy('env.date', 'DESC')
        .select() 
        .getOne();

    if(environment === undefined){
      throw new Error();
    }
    return environment;
    }catch(e){
      console.log(e)
      throw new Error('')
    }
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

  public async store(humidity: number | null, ultra_ray: number | null, temperature: number | null, protectionStatus?: string) {
    await this.environmentRepo.insert({
      humidity, ultra_ray, temperature, protectionStatus
    });
  }
}
