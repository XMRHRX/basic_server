"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerService = void 0;
const typeorm_1 = require("typeorm");
const page_1 = require("../entry/page");
const page_2 = require("../error/page");
class CrawlerService {
    static init() {
        if (this.INSTANCE === undefined) {
            this.INSTANCE = new CrawlerService;
        }
        return this.INSTANCE;
    }
    static getInstance() {
        return this.INSTANCE;
    }
    async getByURL(url, GET_param) {
        const pageCli = typeorm_1.getRepository(page_1.page);
        const searchedPage = await pageCli.findOne({
            where: {
                url: url,
                GET_param: GET_param
            },
        });
        if (searchedPage === undefined) {
            throw new page_2.NoSuchPageError(url);
        }
        return searchedPage;
    }
    async store(url, content, GET_param) {
        const pageCli = typeorm_1.getRepository(page_1.page);
        pageCli.insert({ url, GET_param, content });
        return;
    }
}
exports.CrawlerService = CrawlerService;
//# sourceMappingURL=crawlerServices.js.map