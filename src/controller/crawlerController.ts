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
import { Page } from "@/entry/dto/page";
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
  let page;
  try{
    page = await CrawlerService.getInstance().getByURL(url);
  } catch( e ) {
    console.log(e);
    console.log(`Can not find page: ${url}`);
  }
  if( page ){
    return page.getContent();
  }
  return "";
  }

  @Post()
  @SuccessResponse(204,  'Operation success.')
  public async crawlPage(
    @Body() url: string
  ): Promise<void> {
    console.log("in function");
    //try {
      //await CrawlerService.getInstance().getByURL(url);
    //} catch(e) {
        //crawler
        //store
      //if(e instanceof NoSuchPageError ){
        //const crawler = new _Crawler({
          //maxConnections :  10,
          //callback: (error: any, res: any, done: any) => {
            //console.log("in callback");
            //if(error){
              //console.log(error);
            //}else{
              //var $ = res.$;
              //console.log($("title").text());
              //CrawlerService.getInstance().store(url, ));
            //}
            //done();
            //}
        //});
        //crawler.queue(url);
        //crawler.on('drain', (options: any)=>{
          //console.log("in drain");
        //});
        //console.log("maybe success?");
      //}
    //}
    //return;
  }

}

