import { IContact, IContactCreate } from "./common";
import { Moneybird } from "./moneybird";
import { Administration } from "./administration";
import { HTTP } from "./httpHandler";
export declare class Contact {
    private readonly moneybird;
    private readonly administration;
    private readonly id;
    readonly data: IContact;
    constructor(moneybird: Moneybird, administration: Administration, data: IContact);
    readonly HTTP: HTTP;
    update(data: Partial<IContactCreate>): Promise<Contact>;
    delete(): Promise<void>;
}
//# sourceMappingURL=contact.d.ts.map