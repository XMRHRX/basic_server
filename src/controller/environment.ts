import { Request as exRequest } from 'express';
import { Body, Request, Get, Post, Route, Tags, Controller, Path} from 'tsoa';
import { EnvironmentService } from '@/service';
import { Environment, StoreEnvironmentDTO } from '@/entry';
import { SensorHandler } from '@/component';
// import { SignInRequire } from '@/utils';
// detect

//time based detect should be other?
@Tags('Environment')
@Route('environment')
export class EnvironmentController extends Controller {

  @Get('{id}')
  // @SignInRequire()
  public async getInfo(
  @Path() id: number
  ): Promise<Environment> {
// _id: number
    console.debug("info");
    return await EnvironmentService.getInstance().getById(id);
  }

  @Post()
  public async storeInfo(
    @Request() req: exRequest,
    @Body() form: StoreEnvironmentDTO,
  ): Promise<void> {
    console.debug("store");
// humidity: number | null, ultra_ray: number | null
    const param: StoreEnvironmentDTO = {
      humidity: form['humidity'],
      ultra_ray: form['ultra_ray'],
      temperature: form['temperature'],
    }
    await EnvironmentService.getInstance().store(param);
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
