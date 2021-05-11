import { Controller, Tags, Route, Get, Post } from 'tsoa';
import { IAISetting } from '@/entry';
import { AI } from '@/AI';

@Tags('AI')
@Route('ai')
export class AIController extends Controller {

  @Get()
  public async predict(): Promise<string> {
    const aiInstance = new AI();
    const param: IAISetting = {
      Authorization: '_', // would be replace in the setting function, so could be anything
      locationName: ['%E9%9B%B2%E6%9E%97%E7%B8%A3'], // 雲林縣, char should be escaped
      limit: 10,
    }
    aiInstance.set(param);
    aiInstance.predict();
    return "";
    // 1. sensor informatin/DB information
    // 2. AI information
    // opt 3. classify
    // 4. find API form plants
  }
}
