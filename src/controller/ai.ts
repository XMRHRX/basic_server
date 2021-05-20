import { Controller, Tags, Route, Get, Post } from 'tsoa';
import { AISettingDTO, PredictResultDTO } from '@/entry';
import { AI } from '@/AI';

@Tags('AI')
@Route('ai')
export class AIController extends Controller {

  @Get()
  public async predict(): Promise<PredictResultDTO> {
    const ai = new AI();
    const param: AISettingDTO = {
      // Authorization: '_', // would be replace in the setting function, so could be anything
      // locationName: ['%E9%9B%B2%E6%9E%97%E7%B8%A3'], // 雲林縣, char should be escaped
      limit: 10,
    }
    ai.set(param);
    ai.predict();
    return {};
    // 1. sensor informatin/DB information
    // 2. AI information
    // opt 3. classify
    // 4. find API form plants
  }
}
