import { Moneybird } from "./moneybird";
import { IAdministration, IContactCreate, ICustomField, ILedgerAccount, ISalesInvoiceCreate, ISalesInvoiceState, ITax, ITaxRateType, IWorkflow } from "./common";
import { Contact } from "./contact";
import { HTTP } from "./httpHandler";
import { SalesInvoice } from "./salesInvoice";
type PaginatedOptions = Partial<{
    page: number;
    per_page: number;
    include_archived: boolean;
}>;
export declare class Administration {
    private readonly moneybird;
    private readonly id;
    readonly data: IAdministration;
    constructor(moneybird: Moneybird, data: IAdministration);
    readonly HTTP: HTTP;
    contacts(params?: Partial<PaginatedOptions & {
        query: string;
    }>): Promise<Contact[]>;
    filterContacts(filter: Partial<{
        first_name: string;
        last_name: string;
        created_after: string;
        updated_after: string;
    }>, pagination?: PaginatedOptions): Promise<Contact[]>;
    getContact(id: string): Promise<Contact>;
    getCustomer(id: string): Promise<Contact>;
    contact(id: string): Contact;
    createContact(contact: Partial<IContactCreate>): Promise<Contact>;
    salesInvoices(params?: PaginatedOptions): Promise<SalesInvoice[]>;
    filterSalesInvoices(filter: Partial<{
        state: "all" | ISalesInvoiceState | ISalesInvoiceState[];
        period: "this_month" | "prev_month" | "next_month" | "this_quarter" | "prev_quarter" | "next_quarter" | "this_year" | "prev_year" | "next_year" | string;
        reference: string;
        contact_id: string;
        recurring_sales_invoice_id: string;
        workflow_id: string;
        created_after: string;
        updated_after: string;
    }>, pagination?: PaginatedOptions): Promise<SalesInvoice[]>;
    getSalesInvoice(id: string): Promise<SalesInvoice>;
    salesInvoice(id: string): SalesInvoice;
    createSalesInvoice(invoice: Partial<ISalesInvoiceCreate>): Promise<SalesInvoice>;
    taxes(params?: PaginatedOptions): Promise<ITax[]>;
    filterTaxes(filter: Partial<{
        name: string;
        partial_name: string;
        percentage: number;
        tax_rate_type: "all" | ITaxRateType | ITaxRateType[];
        country: string;
        show_tax: boolean;
        active: boolean;
        created_after: string;
        updated_after: string;
    }>, pagination?: PaginatedOptions): Promise<ITax[]>;
    customFields(params?: PaginatedOptions): Promise<ICustomField[]>;
    ledgerAccounts(params?: PaginatedOptions): Promise<ILedgerAccount[]>;
    workflows(params?: PaginatedOptions): Promise<IWorkflow[]>;
}
export {};
//# sourceMappingURL=administration.d.ts.map