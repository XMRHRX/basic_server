import { getRepository } from 'typeorm';
import { page } from '@/entry';
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

  public async getByURL(url: string, GET_param?: string): Promise<page> {
    const pageCli = getRepository(page);
    console.log('here 1');
    const searchedPage: page | undefined = await pageCli.findOne({
      where: {
        url: url,
        GET_param: GET_param
      },
    });

    if( searchedPage === undefined ) {
      throw new NoSuchPageError(url);
    }
    return searchedPage;
  }

  public async store(url: string, content: string, GET_param: Array<string> | null): Promise<void> {
    const pageCli = getRepository(page);
    pageCli.insert({ url, GET_param, content });
    return;
  }


}
