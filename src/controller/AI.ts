import { Controller, Tags, Route, Get, Post } from 'tsoa';

@Tags('AI')
@Route('ai')
export class AIController extends Controller {

  @Get()
  public async predict(){
    // 1. sensor informatin/DB information
    // 2. AI information
    // opt 3. classify
    // 4. find API form plants
  }
}
