"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.SalesInvoice = exports.Contact = exports.Administration = exports.Moneybird = void 0;
const moneybird_1 = require("./moneybird");
Object.defineProperty(exports, "Moneybird", { enumerable: true, get: function () { return moneybird_1.Moneybird; } });
var administration_1 = require("./administration");
Object.defineProperty(exports, "Administration", { enumerable: true, get: function () { return administration_1.Administration; } });
var contact_1 = require("./contact");
Object.defineProperty(exports, "Contact", { enumerable: true, get: function () { return contact_1.Contact; } });
var salesInvoice_1 = require("./salesInvoice");
Object.defineProperty(exports, "SalesInvoice", { enumerable: true, get: function () { return salesInvoice_1.SalesInvoice; } });
__exportStar(require("./common"), exports);
exports.instance = new moneybird_1.Moneybird("https://moneybird.com/api/", "v2");
//# sourceMappingURL=index.js.map