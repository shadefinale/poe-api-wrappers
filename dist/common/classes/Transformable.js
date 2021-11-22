"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transformable = void 0;
const class_transformer_1 = require("class-transformer");
class Transformable {
    /**
     * Converts this class back into a plain javascript object.
     *
     * @remarks
     * Property keys which have been renamed during the initial transformation to a class object will
     * be reverted to the original keys. For example, the `cachedSince` property in the [[Ladder]]
     * class will be reverted to the original API property, `cached_since`.
     */
    toPlain() {
        return class_transformer_1.classToPlain(this);
    }
}
exports.Transformable = Transformable;
