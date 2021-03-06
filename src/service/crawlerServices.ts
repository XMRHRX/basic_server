import { getRepository } from 'typeorm';
import { Page } from '@/entry';
import { NoSuchPageError } from '@/error';

export class CrawlerService {
  private static INSTANCE: CrawlerService;

  public static init(): CrawlerService {
    if(this.INSTANCE === undefined ){
      this.INSTANCE = new CrawlerService;
    }
    return this.INSTANCE;
  }

  public static getInstance(): CrawlerService {
    return this.INSTANCE;
  }

  public async getByURL(url: string, GET_param?: string): Promise<Page> {
    try{
      const pageCli = getRepository(Page);
      const searchedPage: Page | undefined = await pageCli.findOne({
        where: {
          URL: url
        },
      });
      if( searchedPage === undefined ) {
        throw new NoSuchPageError(url);
      }
      return searchedPage;
    } catch(e) {
        console.debug(e);
        throw e;
    }
  }

  public async list(): Promise<string[]> {
    const pageCli = getRepository(Page);
    const pageList = await pageCli.find();
    const urlList: string[] = [];
    for(const page of pageList){
      urlList.push(page.URL);
    }
    return urlList;
  }

  public async store(URL: string, fileName: string): Promise<void> {
    const pageCli = getRepository(Page);
    pageCli.insert({URL, fileName});
    return;
  }


}
