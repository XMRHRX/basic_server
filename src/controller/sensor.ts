import { Request as exRequest,  } from 'express';
import { Controller, Tags, Route, Get, Path, Post, Body, Request } from 'tsoa';
import { SensorHandler } from '@/component'
import { EnvironmentService, SensorGroupService } from '@/service';
import { SensorStoreDTO, SensorInfoDTO, RegisterResponseDTO, RegisterSensorDTO } from '@/entry';

@Tags('Component')
@Route('component')
export class ComponentController extends Controller {

  @Post('sensors/register')
  public async registerSensor(
    @Request() req: exRequest,
    @Body() form: RegisterSensorDTO,
  ): Promise<RegisterResponseDTO>{
    console.debug('sensors/regsiter');
    console.log(form);
    return {
      id: await SensorGroupService.getInstance().store(form['name'], form['sensoType'])
    }
  }

  @Post('sensors/{name}')
  public async storeInfo(
    @Request() req: exRequest,
    @Path() name: string,
    @Body() form: SensorStoreDTO,
  ): Promise<void> {
    const id = form['id'];
    const dataDTO = form['data'];
    console.log(id)
    console.log(form)
    try{
      // check id exist
      await SensorGroupService.getInstance().getById(id);
      await EnvironmentService.getInstance().store(dataDTO['humidity'], dataDTO['ultra_ray'], dataDTO['temperature']);
    }catch(e) {
      console.log(e);
      this.setStatus(401);
      return;
    }
  }

  /* And motor or other component below */
}
