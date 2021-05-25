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
// _id: number
    console.debug("info");
    try{
      return await EnvironmentService.getInstance().getById(id);
    }catch(e){
      console.log(e);
      this.setStatus(401);
      throw new Error('unknow error')
    }
  }

  // @Post('detect')
  // public async detect(
  // ): Promise <void> {
    // const {
      // humidity,
      // ultra_ray,
      // temperature,
    // } = await SensorHandler.getInstance().detect();
    // await EnvironmentService.getInstance().store(humidity, ultra_ray, temperature);
  // }


  // @Post('protect')
  // public async protect(
  // ): Promise<void> {
  // }

}
