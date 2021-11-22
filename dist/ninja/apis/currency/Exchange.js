"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exchange = void 0;
const classes_1 = require("../../../common/classes");
const class_transformer_1 = require("class-transformer");
class Exchange extends classes_1.Transformable {
}
__decorate([
    class_transformer_1.Expose({ name: "league_id" })
], Exchange.prototype, "leagueId", void 0);
__decorate([
    class_transformer_1.Expose({ name: "pay_currency_id" })
], Exchange.prototype, "payCurrencyId", void 0);
__decorate([
    class_transformer_1.Expose({ name: "get_currency_id" })
], Exchange.prototype, "getCurrencyId", void 0);
__decorate([
    class_transformer_1.Expose({ name: "sample_time_utc" }),
    class_transformer_1.Type(/* istanbul ignore next */ () => Date)
], Exchange.prototype, "sampleTime", void 0);
__decorate([
    class_transformer_1.Expose({ name: "data_point_count" })
], Exchange.prototype, "dataPointCount", void 0);
__decorate([
    class_transformer_1.Expose({ name: "includes_secondary" })
], Exchange.prototype, "includesSecondary", void 0);
__decorate([
    class_transformer_1.Expose({ name: "listing_count" })
], Exchange.prototype, "listingCount", void 0);
exports.Exchange = Exchange;
