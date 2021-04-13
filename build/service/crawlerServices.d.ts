import { page } from '../entry/page';
export declare class CrawlerService {
    private static INSTANCE;
    static init(): CrawlerService;
    static getInstance(): CrawlerService;
    getByURL(url: string, GET_param?: string): Promise<page>;
    store(url: string, content: string, GET_param: Array<string> | null): Promise<void>;
}
//# sourceMappingURL=crawlerServices.d.ts.map