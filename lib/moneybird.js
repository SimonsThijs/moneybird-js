"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moneybird = void 0;
const gaxios_1 = require("gaxios");
const administration_1 = require("./administration");
const debug_1 = require("debug");
class Moneybird {
    constructor(url, version, options) {
        this.options = { api_token: "" };
        this.url = url;
        this.version = version;
        this.client = new gaxios_1.Gaxios({
            baseUrl: new URL(version, url).href + "/",
            responseType: "json",
            validateStatus: () => true,
        });
        if (options)
            this.setOptions(options);
    }
    setOptions(options) {
        this.options = options;
        this.client.defaults.headers = {
            Authorization: `Bearer ${options.api_token}`,
        };
        this.client.defaults.responseType = "json";
    }
    async administrations() {
        const data = await this.GET("administrations");
        return data.map((a) => new administration_1.Administration(this, a));
    }
    administration(id) {
        return new administration_1.Administration(this, { id });
    }
    async GET(url, options = {}) {
        (0, debug_1.default)("moneybird")(`GET ${url}`);
        const response = await this.client.request(Object.assign({ method: "GET", url: url }, options));
        this.handleErrors(response);
        return response.data;
    }
    async POST(url, data, options = {}) {
        (0, debug_1.default)("moneybird")(`POST ${url}`);
        const response = await this.client.request(Object.assign({ method: "POST", url: url, data: data }, options));
        this.handleErrors(response);
        return response.data;
    }
    async PATCH(url, data, options = {}) {
        (0, debug_1.default)("moneybird")(`PATCH ${url}`);
        const response = await this.client.request(Object.assign({ method: "PATCH", url: url, data: data }, options));
        this.handleErrors(response);
        return response.data;
    }
    async DELETE(url, options = {}) {
        (0, debug_1.default)("moneybird")(`DELETE ${url}`);
        const response = await this.client.request(Object.assign({ method: "DELETE", url: url }, options));
        this.handleErrors(response);
        return response.data;
    }
    handleErrors(response) {
        let error = "Unknown error;";
        switch (response.status) {
            case 200:
            case 201:
            case 204:
                return;
            case 400:
                error =
                    "Bad request - Parameters for the request are missing or malformed. Body contains the errors.";
                break;
            case 401:
                error =
                    "Authorization required - No authorization provided or invalid authorization information provided";
                break;
            case 402:
                error = "Payment Required - Account limit reached";
                break;
            case 403:
                error =
                    "Forbidden - IP is blacklisted for API usage, see Throttling information";
                break;
            case 404:
                error = "Not found - Entity not found";
                break;
            case 405:
                error =
                    "Method Not Allowed - The endpoint with this HTTP method is not available in the API";
                break;
            case 406:
                error =
                    "Not accepted - The requested content type is not supported by the API";
                break;
            case 422:
                error =
                    "Unprocessable entity - Saving the entity in the database failed due to validation errors. Body contains the errors.";
                break;
            case 429:
                error = "Too many requests - See Throttling information";
                break;
            case 500:
                error =
                    "Internal server error - Something went wrong while processing the request. This is unexpected behaviour and requires Moneybird to fix the scenario.";
                break;
        }
        throw {
            error: error,
            message: response.data.error,
        };
    }
}
exports.Moneybird = Moneybird;
//# sourceMappingURL=moneybird.js.map