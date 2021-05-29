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
    // const temp = await CropService.getInstance().getByRange(environment.getHumidity(), environment.getUltraRay(), environment.getTemperature());
    // console.log(temp)
    const ai = new AI();
    const param: AISettingDTO = {
      limit: 1,
    }
    ai.set(param);
    return {
      cropList: await ai.predict()
    }
    // 1. sensor informatin/DB information
    // 2. AI information
    // opt 3. classify
    // 4. find API form plants
  }
}
