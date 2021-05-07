import { Request as exRequest } from 'express';
import { Controller, Tags, Route, Get, Post, Body, Request } from 'tsoa';
import { SensorHandler, IRegisterSensor } from '@/component'

@Tags('Component')
@Route('component')
export class ComponentController extends Controller {

  @Post('register')
  public async registerSensor(
    @Request() req: exRequest,
    @Body() form: IRegisterSensor,
  ){
    const sensorInstance = await SensorHandler.getInstance().getSensor(form['type'])
    await SensorHandler.getInstance().registerSensor(sensorInstance);
  }
}
