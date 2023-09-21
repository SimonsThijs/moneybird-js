import { Moneybird } from "./moneybird";
import { Administration } from "./administration";
import { IPayment, IPaymentCreate, ISalesInvoice, ISalesInvoiceSending } from "./common";
export declare class SalesInvoice {
    private readonly moneybird;
    private readonly administration;
    private readonly id;
    readonly data: ISalesInvoice;
    private readonly HTTP;
    constructor(moneybird: Moneybird, administration: Administration, data: ISalesInvoice);
    send(data: ISalesInvoiceSending): Promise<SalesInvoice>;
    downloadPDF(): Promise<string>;
    downloadUBL(): Promise<string>;
    downloadPackingSlip(): Promise<string>;
    addPayment(payment: IPaymentCreate): Promise<IPayment>;
    deletePayment(payment: IPayment): Promise<void>;
    deletePayment(paymentId: string): Promise<void>;
}
//# sourceMappingURL=salesInvoice.d.ts.map