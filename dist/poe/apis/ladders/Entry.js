"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
const class_transformer_1 = require("class-transformer");
const classes_1 = require("../../../common/classes");
const account_1 = require("../account");
const characters_1 = require("../characters");
class Entry extends classes_1.Transformable {
    /**
     * @returns URL to the character window on the Path of Exile website
     */
    get characterWindowUrl() {
        return `https://www.pathofexile.com/account/view-profile/${this.account.name}/characters?characterName=${this.character.name}`;
    }
    /**
     * @returns URL to the account profile on the Path of Exile website
     */
    get profileUrl() {
        return `https://www.pathofexile.com/account/view-profile/${this.account.name}`;
    }
}
__decorate([
    class_transformer_1.Type(/* istanbul ignore next */ () => characters_1.Character)
], Entry.prototype, "character", void 0);
__decorate([
    class_transformer_1.Type(/* istanbul ignore next */ () => account_1.Account)
], Entry.prototype, "account", void 0);
exports.Entry = Entry;
