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
exports.Ladder = void 0;
const class_transformer_1 = require("class-transformer");
const classes_1 = require("../../../common/classes");
const API = __importStar(require("./API"));
const Entry_1 = require("./Entry");
class Ladder extends classes_1.Transformable {
    constructor() {
        super(...arguments);
        this._options = {
            limit: 20,
            offset: 0,
        };
        this._leagueId = "Standard";
    }
    set options(options) {
        this._options = Object.assign(Object.assign({}, this._options), options);
    }
    set leagueId(id) {
        this._leagueId = id;
    }
    /**
     * @remarks
     * Uses the same [[LadderOptions]] that have been used getting this ladder.
     * If you want to fetch an entire ladder, it is highly recommended to set the `limit` option to `200`.
     *
     * @param append Set to `true` if the next entries should be appended to this ladders entries
     * @returns The next set of ladder entries, `null` when there are no more entries
     */
    getNextEntries(append = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._options.offset == null || this._options.limit == null) {
                return null;
            }
            const nextOffset = this._options.offset + this._options.limit;
            if (nextOffset >= this.total) {
                return null;
            }
            // Make sure limit + offset isn't higher than total since that's considered an invalid query
            if (nextOffset + this._options.limit >= this.total) {
                this._options.limit = this.total - nextOffset;
            }
            this._options.offset = nextOffset;
            const ladder = yield API.get(this._leagueId, this._options);
            if (append) {
                this.entries.push(...ladder.entries);
            }
            return ladder.entries;
        });
    }
    /**
     * @example
     * Get all characters which have the Assassin ascendancy.
     *
     * ```typescript
     * const assassins = ladder.filterByCharacter("class", "Assassin");
     * console.log(`${assassins.length} of the first 200 characters are Assassins.`);
     * ```
     *
     * @param property Name of a character property
     * @param value Value of the property that should be filtered
     * @returns A new list of characters matching the filter
     */
    filterByCharacter(property, value) {
        return this.entries.filter((entry) => entry.character[property] === value);
    }
    /**
     * @example
     * Display online characters from the ladder.
     *
     * ```typescript
     * const online = ladder.filterBy("online", true);
     * console.log(`${online.length} of the first 200 characters are currently online.`);
     * ```
     *
     * @param property Name of a ladder entry property
     * @param value Value of the property that should be filtered
     * @returns A new list of characters matching the filter
     */
    filterBy(property, value) {
        return this.entries.filter((entry) => entry[property] === value);
    }
}
__decorate([
    class_transformer_1.Exclude()
], Ladder.prototype, "_options", void 0);
__decorate([
    class_transformer_1.Exclude()
], Ladder.prototype, "_leagueId", void 0);
__decorate([
    class_transformer_1.Type(/* istanbul ignore next */ () => Date),
    class_transformer_1.Expose({ name: "cached_since" })
], Ladder.prototype, "cachedSince", void 0);
__decorate([
    class_transformer_1.Type(/* istanbul ignore next */ () => Entry_1.Entry)
], Ladder.prototype, "entries", void 0);
__decorate([
    class_transformer_1.Exclude()
], Ladder.prototype, "options", null);
__decorate([
    class_transformer_1.Exclude()
], Ladder.prototype, "leagueId", null);
exports.Ladder = Ladder;
