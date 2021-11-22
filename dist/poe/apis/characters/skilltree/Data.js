"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const class_transformer_1 = require("class-transformer");
const classes_1 = require("../../../../common/classes");
const Class_1 = require("./Class");
class Data extends classes_1.Transformable {
}
__decorate([
    class_transformer_1.Type(/* istanbul ignore next */ () => Class_1.Class)
], Data.prototype, "classes", void 0);
__decorate([
    class_transformer_1.Expose({ name: "min_x" })
], Data.prototype, "minX", void 0);
__decorate([
    class_transformer_1.Expose({ name: "min_y" })
], Data.prototype, "minY", void 0);
__decorate([
    class_transformer_1.Expose({ name: "max_x" })
], Data.prototype, "maxX", void 0);
__decorate([
    class_transformer_1.Expose({ name: "max_y" })
], Data.prototype, "maxY", void 0);
exports.Data = Data;
