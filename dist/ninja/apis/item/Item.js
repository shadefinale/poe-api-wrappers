"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const decorators_1 = require("../../../common/decorators");
const classes_1 = require("../../../common/classes");
class Item extends classes_1.Transformable {
}
__decorate([
    decorators_1.TransformNullToUndefined()
], Item.prototype, "icon", void 0);
__decorate([
    decorators_1.TransformNullToUndefined()
], Item.prototype, "baseType", void 0);
__decorate([
    decorators_1.TransformNullToUndefined()
], Item.prototype, "variant", void 0);
__decorate([
    decorators_1.TransformNullToUndefined()
], Item.prototype, "prophecyText", void 0);
__decorate([
    decorators_1.TransformNullToUndefined()
], Item.prototype, "artFilename", void 0);
__decorate([
    decorators_1.TransformNullToUndefined()
], Item.prototype, "flavourText", void 0);
__decorate([
    decorators_1.TransformNullToUndefined()
], Item.prototype, "tradeInfo", void 0);
__decorate([
    decorators_1.TransformNullToUndefined()
], Item.prototype, "mapRegion", void 0);
exports.Item = Item;
