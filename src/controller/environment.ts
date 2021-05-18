import { Request as exRequest } from 'express';
import { Body, Request, Get, Post, Route, Tags, Controller, Path} from 'tsoa';
import { EnvironmentService } from '@/service';
import { Environment, StoreEnvironmentDTO , EnvironmentInfoDTO } from '@/entry';
import { SensorHandler } from '@/component';
// import { SignInRequire } from '@/utils';
// detect

//time based detect should be other?
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
    return await EnvironmentService.getInstance().getById(id);
  }

  @Post('detect')
  public async detect(
  ): Promise <void> {
    console.debug('detect');
    const result = await SensorHandler.getInstance().detect();
    const param: StoreEnvironmentDTO = {
      humidity: result.humidity,
      ultra_ray: result.ultra_ray,
      temperature: result.temperature,
    };
    await EnvironmentService.getInstance().store(param);
  }


  @Post('protect')
  public async protect(
  ): Promise<void> {
    //
  }

}
