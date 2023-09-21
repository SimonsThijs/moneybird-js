"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const httpHandler_1 = require("./httpHandler");
class Contact {
    constructor(moneybird, administration, data) {
        this.moneybird = moneybird;
        this.administration = administration;
        this.id = data.id;
        this.data = data;
        this.HTTP = new httpHandler_1.HttpHandler(this.administration.HTTP, `contacts/${this.id}`);
    }
    async update(data) {
        const contact = await this.HTTP.PATCH("", { contact: data });
        return new Contact(this.moneybird, this.administration, contact);
    }
    async delete() {
        await this.HTTP.DELETE("");
    }
}
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map