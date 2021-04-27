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
import fs from 'fs';
const _Crawler = require('crawler');
//import crawler.default as _Crawler from 'crawler';


@Route("crawler")
export class CrawlerControler extends Controller {
  private storageFolder = 'webPage/';

  private getRandomStr(length: number): string {
    /*
     * From: https: //stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
     * */
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghipqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
  }

  private async randomNameFileStore(content: string): Promise<string>{
    const fileName = this.getRandomStr(32);
    const filePathWithName = this.storageFolder + fileName;
    console.log(`Write to ${filePathWithName}`);
    try {
      const stream = await fs.createWriteStream(filePathWithName);
      await stream.write(content);
      await stream.close();
      return fileName;
    } catch(e) {
      console.log("in random file error");
      console.log(e);
      throw e;
    }
  }

  @Get("list")
  public async getList(
  ): Promise<string[]> {
    const urlList = await CrawlerService.getInstance().list();
    return urlList;
  }

  @Get("{url}")
  public async getWeb(
    @Path() url: string
  ): Promise<string> {
    let page: Page | undefined;
    try{
      page = await CrawlerService.getInstance().getByURL(url);
      const fileContent = fs.readFileSync(this.storageFolder + await page.getFileName()).toString();
      return fileContent;
    } catch( e ) {
      console.log(e);
      console.log(`Can not find page: ${url}`);
      return "page not exist";
    }
  }

  @Post()
  @SuccessResponse(204,  'Operation success.')
  public async crawlPage(
    @Body() req: RequestPageDTO
  ): Promise<number> {
    const url = 'https://'+req.URL;
    let statusCode = -1;
    /*
     * -1: unknown status/failed
     * 0: crawled success
     * 1: page existed
     */
    try {
      await CrawlerService.getInstance().getByURL(req.URL);
      statusCode = 1;
    }catch(e) {
      if(e instanceof NoSuchPageError) {
        console.log(`Starting crawler ${url}...`);
        const crawler = new _Crawler();
        crawler.direct({
          url: url,
          maxConnections: 1,
          options: {
            retried: 1
          },
          callback: async (error: any, res: any) => {
            if(error){
              console.log(error);
              statusCode = -1;
            } else {
              var $ = res.$;
              console.log("Crawled: " + $("title").text());
              const fileName = await this.randomNameFileStore(res.body);
              await CrawlerService.getInstance().store(req.URL, fileName);
              statusCode = 0;
            }
          }
        });
      }else {
        console.log(e);
        throw e;
      }
    }
    return statusCode;
  }

}

