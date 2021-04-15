import {
  Body, 
  Controller, 
  Get, 
  Path, 
  Post, 
  Query, 
  Route, 
  SuccessResponse, 
} from "tsoa";
import { getRepository } from 'typeorm';
import { Page, PageDTO, RequestPageDTO } from "@/entry";
import { CrawlerService } from "@/service";
import { NoSuchPageError } from '@/error';
const _Crawler = require('crawler');
//import crawler.default as _Crawler from 'crawler';


@Route("crawler")
export class CrawlerControler extends Controller {
  @Post('test')
  @SuccessResponse(204, 'Operation success.')
  public async test(
    @Body() input: string
  ): Promise<string> {
    return input;
  }

  @Get("{url}")
  public async getWeb(
    @Path() url: string
  ): Promise<string> {
    let page: Page | undefined;
    try{
      page = await CrawlerService.getInstance().getByURL(url);
      return page.getDOM();
    } catch( e ) {
      console.log(e);
      console.log(`Can not find page: ${url}`);
      return "";
    }
  }

  @Post()
  @SuccessResponse(204,  'Operation success.')
  public async crawlPage(
    @Body() req: RequestPageDTO
  ): Promise<void> {
    const url = 'https://'+req.URL;
    try {
      //await CrawlerService.getInstance().getByURL(url);
      //if(e instanceof NoSuchPageError) {
        console.log(`Starting crawler ${url}...`);
        const crawler = new _Crawler({
          maxConnections: 5,
          callback: (error: any, res: any, done: any) => {
            if(error){
              console.log(error);
            } else {
              var $ = res.$;
              console.log($("title").text());
              //console.log(res.body);
              CrawlerService.getInstance().store(req.URL, res.body);
            }
            done();
          }
        });
        crawler.queue(url);
    } catch(e) {
      console.log(e);
        //crawler.on('drain', (options: any)=>{
          //console.log("in drain");
        //});
      //}
    }
  }

}

