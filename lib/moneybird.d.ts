import { MoneybirdOptions } from "./common";
import { Administration } from "./administration";
import { GaxiosOptions } from "gaxios/build/src/common";
import { HTTP } from "./httpHandler";
export declare class Moneybird implements HTTP {
    private readonly client;
    private readonly url;
    private readonly version;
    private options;
    constructor(url: string, version: string, options?: MoneybirdOptions);
    setOptions(options: MoneybirdOptions): void;
    administrations(): Promise<Administration[]>;
    administration(id: string): Administration;
    GET<T>(url: string, options?: GaxiosOptions): Promise<T>;
    POST<T>(url: string, data: unknown, options?: GaxiosOptions): Promise<T>;
    PATCH<T>(url: string, data: unknown, options?: GaxiosOptions): Promise<T>;
    DELETE<T>(url: string, options?: GaxiosOptions): Promise<T>;
    private handleErrors;
}
//# sourceMappingURL=moneybird.d.ts.map