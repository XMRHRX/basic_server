import { Request as exRequest,  } from 'express';
import { Controller, Tags, Route, Post, Body, Request } from 'tsoa';
import { EnvironmentService } from '@/service';
import { SensorInfoDTO } from '@/entry';

@Tags('Component')
@Route('component')
export class ComponentController extends Controller {

  @Post('sensors')
  public async storeInfo(
    @Request() req: exRequest,
    @Body() form: SensorInfoDTO,
  ): Promise<void> {
    // check id exist
    try {
      await EnvironmentService.getInstance().store(form['humidity'], form['ultra_ray'], form['temperature']);
    } catch(e) {
      console.log(e);
      this.setStatus(401);
      return;
    }
  }

  /* And motor or other component below */
}
