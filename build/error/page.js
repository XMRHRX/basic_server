"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoSuchPageError = void 0;
class NoSuchPageError extends Error {
    constructor(url, GET_param) {
        //TODO: handle GET_param to exception message.
        super("page not found: " + url);
    }
}
exports.NoSuchPageError = NoSuchPageError;
//# sourceMappingURL=page.js.map