"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesInvoice = void 0;
const httpHandler_1 = require("./httpHandler");
class SalesInvoice {
    constructor(moneybird, administration, data) {
        this.moneybird = moneybird;
        this.administration = administration;
        this.id = data.id;
        this.data = data;
        this.HTTP = new httpHandler_1.HttpHandler(this.administration.HTTP, `sales_invoices/${this.id}`);
    }
    async send(data) {
        return this.HTTP.PATCH("send_invoice", { sales_invoice_sending: data });
    }
    async downloadPDF() {
        return this.HTTP.GET("download_pdf");
    }
    async downloadUBL() {
        return this.HTTP.GET("download_ubl");
    }
    async downloadPackingSlip() {
        return this.HTTP.GET("download_packing_slip_pdf");
    }
    async addPayment(payment) {
        return this.HTTP.POST("payments", {
            payment: payment,
        });
    }
    async deletePayment(payment) {
        const id = typeof payment === "string" ? payment : payment.id;
        await this.HTTP.DELETE(`payments/${id}`);
    }
}
exports.SalesInvoice = SalesInvoice;
//# sourceMappingURL=salesInvoice.js.map