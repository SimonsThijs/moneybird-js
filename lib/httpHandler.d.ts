import { GaxiosOptions } from "gaxios/build/src/common";
export interface HTTP {
    GET<T>(url: string, options?: GaxiosOptions): Promise<T>;
    POST<T>(url: string, data: unknown, options?: GaxiosOptions): Promise<T>;
    PATCH<T>(url: string, data: unknown, options?: GaxiosOptions): Promise<T>;
    DELETE<T>(url: string, options?: GaxiosOptions): Promise<T>;
}
export declare class HttpHandler implements HTTP {
    private readonly parent;
    private readonly url;
    constructor(parent: HTTP, url: string);
    GET<T>(url: string, options?: GaxiosOptions): Promise<T>;
    POST<T>(url: string, data: unknown, options?: GaxiosOptions): Promise<T>;
    PATCH<T>(url: string, data: unknown, options?: GaxiosOptions): Promise<T>;
    DELETE<T>(url: string, options?: GaxiosOptions): Promise<T>;
}
//# sourceMappingURL=httpHandler.d.ts.map