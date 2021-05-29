import { getRepository, Repository, LessThan, MoreThan } from 'typeorm';
import { Crop, RangeCropInfoDTO } from '@/entry';

export class CropService {
  private static instance:CropService;
  private cropRepo: Repository<Crop>;

  constructor() {
    this.cropRepo = getRepository(Crop)
  }

  public static init() {
    if(this.instance === undefined){
      this.instance = new CropService();
    }
    return this.instance;
  }

  public static getInstance(): CropService {
    return this.instance;
  }
  public async getByMidRange(humidity: RangeCropInfoDTO,  ultra_ray: RangeCropInfoDTO, temperature: RangeCropInfoDTO): Promise<Crop[]> {
    const midHumidity: number = ((humidity.max + humidity.min)/ 2);
    const midUltraRay: number = ((ultra_ray.max + ultra_ray.min)/ 2);
    const midTemperature: number = ((temperature.max + temperature.min)/ 2);
    console.log(midHumidity)
    console.log(midUltraRay)
    console.log(midTemperature)
    const crop: Crop[] | undefined = await this.cropRepo.find({
      where: {
        max_humidity: MoreThan(midHumidity),
        min_humidity: LessThan(midHumidity),
        max_ultra_ray: MoreThan(midUltraRay),
        min_ultra_ray: LessThan(midUltraRay),
        max_temperature: MoreThan(midTemperature),
        min_temperature: LessThan(midTemperature),
      }
    });
    if(crop === undefined){
      throw new Error();
    }
    return crop;
  }

  public async getByRange(humidity: RangeCropInfoDTO,  ultra_ray: RangeCropInfoDTO, temperature: RangeCropInfoDTO): Promise<Crop[]> {
    const crop: Crop[] | undefined = await this.cropRepo.find({
      where: {
        max_humidity: MoreThan(humidity.max),
        min_humidity: LessThan(humidity.min),
        max_ultra_ray: MoreThan(ultra_ray.max),
        min_ultra_ray: LessThan(ultra_ray.min),
        max_temperature: MoreThan(temperature.max),
        min_temperature: LessThan(temperature.min),
      }
    });
    if(crop === undefined){
      throw new Error();
    }
    return crop;
  }

  public async getByHumidity(humidity: number): Promise<Crop[]> {
    const crop: Crop[] | undefined = await this.cropRepo.find({
      where: {
        max_humidity: MoreThan(humidity),
        min_humidity: LessThan(humidity),
      }
    });
    if(crop === undefined){
      throw new Error();
    }
    return crop;
  }
  public async getByUltraRay(ultra_ray: number): Promise<Crop[]> {
    const crop: Crop[] | undefined = await this.cropRepo.find({
      where: {
        max_ultra_ray: MoreThan(ultra_ray),
        min_ultra_ray: LessThan(ultra_ray),
      }
    });
    if(crop === undefined){
      throw new Error();
    }
    return crop;
  }
  public async getByTemperature(temperature: number): Promise<Crop[]> {
    const crop: Crop[] | undefined = await this.cropRepo.find({
      where: {
        max_temperature: MoreThan(temperature),
        min_temperature: LessThan(temperature),
      }
    });
    if(crop === undefined){
      throw new Error();
    }
    return crop;
  }

  // public async store() {
    // await this.cropRepo.insert({
       // _id, name, sensorType: stringSensorType
    // });
  // }
}

