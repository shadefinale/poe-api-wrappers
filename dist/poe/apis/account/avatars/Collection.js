"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const class_transformer_1 = require("class-transformer");
const classes_1 = require("../../../../common/classes");
const API = __importStar(require("../API"));
const Avatar_1 = require("./Avatar");
class Collection extends classes_1.Transformable {
    constructor() {
        super(...arguments);
        this._options = {
            page: 1,
            perPage: 16,
            custom: false,
        };
    }
    set options(options) {
        this._options = Object.assign(Object.assign({}, this._options), options);
    }
    /**
     * @remarks
     * Uses the same [[AvatarsOptions]] that have been used getting this avatar collection.
     *
     * @param append If set to `true`, the avatars will be appended to the [[collection]] property
     * @returns The next set of avatars, `null` when there are no more entries
     * @throws [[APIError]]
     */
    getNextPage(append = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._options.page == null) {
                return null;
            }
            this._options.page += 1;
            const collection = yield API.getAvatars(this._options);
            if (collection.collection.length === 0) {
                return null;
            }
            if (append) {
                this.collection.push(...collection.collection);
            }
            return collection.collection;
        });
    }
}
__decorate([
    class_transformer_1.Exclude()
], Collection.prototype, "_options", void 0);
__decorate([
    class_transformer_1.Type(/* istanbul ignore next */ () => Avatar_1.Avatar)
], Collection.prototype, "collection", void 0);
__decorate([
    class_transformer_1.Exclude()
], Collection.prototype, "options", null);
exports.Collection = Collection;
