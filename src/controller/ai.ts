import { Controller, Tags, Route, Get, Post } from 'tsoa';
import { AISettingDTO, PredictResultDTO, Crop } from '@/entry';
import { EnvironmentService, CropService } from '@/service';
import { AI } from '@/AI';

@Tags('AI')
@Route('ai')
export class AIController extends Controller {

  @Get()
  public async predict(): Promise<PredictResultDTO> {
    const environment = await EnvironmentService.getInstance().getMostRecnetly();
    console.log(environment)
    const ai = new AI();
    const param: AISettingDTO = {
      limit: 1,
    }
    ai.set(param);
    return {
      cropList: await ai.predict()
    }
  }
}
