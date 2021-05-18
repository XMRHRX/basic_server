import { Request as exRequest,  } from 'express';
import { Controller, Tags, Route, Get, Post, Body, Request } from 'tsoa';
import { SensorHandler } from '@/component'
import { EnvironmentService } from '@/service';
import { StoreEnvironmentDTO, SensorInfoDTO, SensorListDTO , RegisterResponseDTO, RegisterSensorDTO } from '@/entry';

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
      id: await SensorHandler.getInstance().registerSensor(form['type'], form['name']),
    }
  }

  @Get('sensors/list')
  public async listSensor(
    @Request() req: exRequest
  ): Promise<SensorListDTO> {
    console.debug('sensors/list');
    return await SensorHandler.getInstance().listSensor();
  }

  @Post('sensors')
  public async storeInfo(
    @Request() req: exRequest,
    @Body() form: SensorInfoDTO,
  ): Promise<void> {
    // check id exist
    if( await SensorHandler.getInstance().verify(form['id']) === false){
      this.setStatus(401);
      return;
    }
    let param = await SensorHandler.getInstance().createDefaultEnvironmentInfoDTO(form['id']);
    await EnvironmentService.getInstance().store(param);
  }

  /* And motor or other component below */
}
