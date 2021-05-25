import { Request as exRequest } from 'express';
import { Body, Request, Get, Post, Route, Tags, Controller, Path} from 'tsoa';
import { EnvironmentService } from '@/service';
import { Environment , EnvironmentInfoDTO } from '@/entry';
import { SensorHandler } from '@/component';

@Tags('Environment')
@Route('environment')
export class EnvironmentController extends Controller {

  @Get('{id}')
  // @SignInRequire()
  public async getEnvironment(
  @Path() id: number
  ): Promise<EnvironmentInfoDTO> {
    try{
      const enviroment: Environment = await EnvironmentService.getInstance().getById(id)
      return {
        humidity: enviroment.getHumidity(),
        temperature: enviroment.getTemperature(),
        ultra_ray: enviroment.getUltraRay(),
      };
    }catch(e){
      console.log(e);
      this.setStatus(401);
      throw new Error('unknow error')
    }
  }

  // @Post('detect')
  // public async detect(
  // ): Promise <void> {
// <<<<<<< HEAD
    // console.debug('detect');
    // const result = await SensorHandler.getInstance().detect();
    // const param: StoreEnvironmentDTO = {
      // humidity: result.humidity,
      // ultra_ray: result.ultra_ray,
      // temperature: result.temperature,
    // };
    // await EnvironmentService.getInstance().store(param);
// =======
    // const {
      // humidity,
      // ultra_ray,
      // temperature,
    // } = await SensorHandler.getInstance().detect();
    // await EnvironmentService.getInstance().store(humidity, ultra_ray, temperature);
// >>>>>>> feat_sensor
  // }


  // @Post('protect')
  // public async protect(
  // ): Promise<void> {
  // }

}
