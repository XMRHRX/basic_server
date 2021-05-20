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

  public async getById(_id: number): Promise<EnvironmentInfoDTO> {
    const environment: Environment | undefined = await this.environmentRepo.findOne({
      where: {
      _id: _id
      }});
    if(environment === undefined){
      throw new Error();
    }
    return environment.getEnvironmentInfoDTO();
  }

  public async store(param: StoreEnvironmentDTO) {
    // type error so check the tutorial of insert and typeorm
    const env = this.environmentRepo.create({});
    await this.environmentRepo.insert(
      env
      // ...param,
    );
  }
}
