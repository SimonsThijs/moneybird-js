"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHandler = void 0;
class HttpHandler {
    constructor(parent, url) {
        this.parent = parent;
        this.url = url;
    }
    async GET(url, options = {}) {
        return await this.parent.GET(`${this.url}/${url}`, options);
    }
    async POST(url, data, options = {}) {
        return await this.parent.POST(`${this.url}/${url}`, data, options);
    }
    async PATCH(url, data, options = {}) {
        return await this.parent.PATCH(`${this.url}/${url}`, data, options);
    }
    async DELETE(url, options = {}) {
        return await this.parent.DELETE(`${this.url}/${url}`, options);
    }
}
exports.HttpHandler = HttpHandler;
//# sourceMappingURL=httpHandler.js.map