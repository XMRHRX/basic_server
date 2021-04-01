"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerControler = void 0;
const tsoa_1 = require("tsoa");
const _Crawler = require('crawler');
const crawlerServices_1 = require("../service/crawlerServices");
const page_1 = require("../error/page");
let CrawlerControler = class CrawlerControler extends tsoa_1.Controller {
    async getWeb(url) {
        const page = await crawlerServices_1.CrawlerService.getInstance().getByURL(url);
        console.log("here");
        return "hihi";
        //return page.getContent() | "hihi";
    }
    async crawlPage(url) {
        try {
            await crawlerServices_1.CrawlerService.getInstance().getByURL(url);
        }
        catch (e) {
            //crawler
            //store
            if (e instanceof page_1.NoSuchPageError) {
                const crawler = new _Crawler({
                    maxConnections: 10,
                    callback: function (error, res, done) {
                        if (error) {
                            console.log(error);
                        }
                        else {
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
};
__decorate([
    tsoa_1.Get("{url}"),
    __param(0, tsoa_1.Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrawlerControler.prototype, "getWeb", null);
__decorate([
    tsoa_1.Post(),
    tsoa_1.SuccessResponse(204, 'Operation success.'),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrawlerControler.prototype, "crawlPage", null);
CrawlerControler = __decorate([
    tsoa_1.Route("crawler")
], CrawlerControler);
exports.CrawlerControler = CrawlerControler;
//# sourceMappingURL=crawlerController.js.map