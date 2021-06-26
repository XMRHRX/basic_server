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
    console.log(form);
    return {
      id: await SensorGroupService.getInstance().store(form['name'], form['sensorType'])
    }
  }

  @Post('sensors')
  public async storeInfo(
    @Request() req: exRequest,
    @Body() form: SensorInfoDTO,
  ): Promise<void> {
    // const id = form['id'];
    // const dataDTO = form['data'];
    const dataDTO = form;

    try{
      // check id exist
      // await SensorGroupService.getInstance().getById(id);
      await EnvironmentService.getInstance().store(dataDTO['humidity'], dataDTO['ultra_ray'], dataDTO['temperature'], dataDTO['protectionStatus']);
    }catch(e) {
      console.log(e);
      this.setStatus(401);
      return;
    }
  }

  /* And motor or other component below */
}
