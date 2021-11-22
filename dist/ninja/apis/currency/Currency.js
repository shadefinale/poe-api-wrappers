"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
const class_transformer_1 = require("class-transformer");
const decorators_1 = require("../../../common/decorators");
const classes_1 = require("../../../common/classes");
const Exchange_1 = require("./Exchange");
class Currency extends classes_1.Transformable {
}
__decorate([
    class_transformer_1.Expose({ name: "currencyTypeName" })
], Currency.prototype, "name", void 0);
__decorate([
    class_transformer_1.Expose({ name: "paySparkLine" })
], Currency.prototype, "sellSparkline", void 0);
__decorate([
    class_transformer_1.Expose({ name: "receiveSparkLine" })
], Currency.prototype, "buySparkline", void 0);
__decorate([
    class_transformer_1.Expose({ name: "lowConfidencePaySparkLine" })
], Currency.prototype, "lowConfidenceSellSparkline", void 0);
__decorate([
    class_transformer_1.Expose({ name: "lowConfidenceReceiveSparkLine" })
], Currency.prototype, "lowConfidenceBuySparkline", void 0);
__decorate([
    class_transformer_1.Expose({ name: "pay" }),
    class_transformer_1.Type(/* istanbul ignore next */ () => Exchange_1.Exchange),
    decorators_1.TransformNullToUndefined()
], Currency.prototype, "sell", void 0);
__decorate([
    class_transformer_1.Expose({ name: "receive" }),
    class_transformer_1.Type(/* istanbul ignore next */ () => Exchange_1.Exchange),
    decorators_1.TransformNullToUndefined()
], Currency.prototype, "buy", void 0);
exports.Currency = Currency;
