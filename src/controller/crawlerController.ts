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
import {getRepository} from 'typeorm';
const _Crawler = require('crawler');


import { Page } from "../entry/dto/page";
import { CrawlerService } from "../service/crawlerServices";
import { NoSuchPageError } from '../error/page';


@Route("crawler")
export class CrawlerControler extends Controller {
  @Get("{url}")
  public async getWeb(
    @Path() url: string
  ): Promise<string> {
    const page = await CrawlerService.getInstance().getByURL(url);
    console.log("here");
    return "hihi";
    //return page.getContent() | "hihi";
  }

  @Post()
  @SuccessResponse(204,  'Operation success.')
  public async crawlPage(
    @Body() url: string
  ): Promise<void> {
    try {
      await CrawlerService.getInstance().getByURL(url);
    }catch(e) {
        //crawler
        //store
      if(e instanceof NoSuchPageError ){
        const crawler = new _Crawler({
          maxConnections :  10,
          callback: function (error: any,  res: any,  done: any) {
            if(error){
              console.log(error);
            }else{
              var $ = res.$;
              console.log($("title").text());
            }
              done();
            }
        });
        crawler.queue('https://google.com');

        //CrawlerService.getInstance().store(url);
      }
    }
    return;
  }

}

