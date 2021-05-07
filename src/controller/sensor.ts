import { Request as exRequest } from 'express';
import { Controller, Tags, Route, Get, Post, Body, Request } from 'tsoa';
import { SensorHandler } from '@/component'
import { ISensor, IRegisterSensor} from '@/entry';

@Tags('Component')
@Route('component')
export class ComponentController extends Controller {

  @Post('sensors/register')
  public async registerSensor(
    @Request() req: exRequest,
    @Body() form: IRegisterSensor,
  ): Promise<void>{
    console.debug('sensors/regsiter');
    console.log(form);
    const sensorInstance = await SensorHandler.getInstance().getSensor(form['type'])
    await SensorHandler.getInstance().registerSensor(sensorInstance);
  }

  @Get('sensors/list')
  public async listSensor(
    @Request() req: exRequest
  ): Promise<ISensor[]> {
    console.debug('sensors/list');
    return await SensorHandler.getInstance().listSensor();
  }

  /* And motor or other component below */
}
