import { Controller } from "tsoa";
export declare class CrawlerControler extends Controller {
    getWeb(url: string): Promise<string>;
    crawlPage(url: string): Promise<void>;
}
//# sourceMappingURL=crawlerController.d.ts.map