"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administration = void 0;
const contact_1 = require("./contact");
const httpHandler_1 = require("./httpHandler");
const salesInvoice_1 = require("./salesInvoice");
class Administration {
    constructor(moneybird, data) {
        this.moneybird = moneybird;
        this.id = data.id;
        this.data = data;
        this.HTTP = new httpHandler_1.HttpHandler(this.moneybird, `${this.id}`);
    }
    async contacts(params) {
        const contacts = await this.HTTP.GET("contacts", {
            params,
        });
        return contacts.map((c) => new contact_1.Contact(this.moneybird, this, c));
    }
    async filterContacts(filter, pagination = {}) {
        const filterString = Object.entries(filter)
            .map(([key, value]) => `${key}:${value}`)
            .join(",");
        const contacts = await this.HTTP.GET(`contacts/filter`, {
            params: Object.assign({ filter: filterString }, pagination),
        });
        return contacts.map((c) => new contact_1.Contact(this.moneybird, this, c));
    }
    async getContact(id) {
        const contact = await this.HTTP.GET(`contacts/${id}`);
        return new contact_1.Contact(this.moneybird, this, contact);
    }
    async getCustomer(id) {
        const contact = await this.HTTP.GET(`contacts/customer_id/${id}`);
        return new contact_1.Contact(this.moneybird, this, contact);
    }
    contact(id) {
        return new contact_1.Contact(this.moneybird, this, { id });
    }
    async createContact(contact) {
        if (!(contact.company_name || (contact.firstname && contact.lastname))) {
            throw new Error("Either company_name or first_name and last_name must be set");
        }
        const data = await this.HTTP.POST("contacts", { contact });
        return new contact_1.Contact(this.moneybird, this, data);
    }
    async salesInvoices(params) {
        const invoices = await this.HTTP.GET("sales_invoices", {
            params,
        });
        return invoices.map((i) => new salesInvoice_1.SalesInvoice(this.moneybird, this, i));
    }
    async filterSalesInvoices(filter, pagination = {}) {
        let filterParam = "";
        if (filter) {
            filterParam = Object.entries(filter)
                .map(([key, value]) => `${key}:${value.join ? value.join("|") : value}`)
                .join(",");
        }
        const invoices = await this.HTTP.GET("sales_invoices", {
            params: Object.assign({ filter: filterParam }, pagination),
        });
        return invoices.map((i) => new salesInvoice_1.SalesInvoice(this.moneybird, this, i));
    }
    async getSalesInvoice(id) {
        const invoice = await this.HTTP.GET(`sales_invoices/${id}`);
        return new salesInvoice_1.SalesInvoice(this.moneybird, this, invoice);
    }
    salesInvoice(id) {
        return new salesInvoice_1.SalesInvoice(this.moneybird, this, { id });
    }
    async createSalesInvoice(invoice) {
        const data = await this.HTTP.POST("sales_invoices", {
            sales_invoice: invoice,
        });
        return new salesInvoice_1.SalesInvoice(this.moneybird, this, data);
    }
    async taxes(params) {
        return await this.HTTP.GET("tax_rates", { params });
    }
    async filterTaxes(filter, pagination = {}) {
        let filterParam = "";
        if (filter) {
            filterParam = Object.entries(filter)
                .map(([key, value]) => `${key}:${value.join ? value.join("|") : value}`)
                .join(",");
        }
        return await this.HTTP.GET("tax_rates", {
            params: Object.assign({ filter: filterParam }, pagination),
        });
    }
    async customFields(params) {
        return await this.HTTP.GET("custom_fields", { params });
    }
    async ledgerAccounts(params) {
        return await this.HTTP.GET("ledger_accounts", { params });
    }
    async workflows(params) {
        return await this.HTTP.GET("workflows", { params });
    }
}
exports.Administration = Administration;
//# sourceMappingURL=administration.js.map