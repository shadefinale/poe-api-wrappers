import { LanguageCode } from "../../shared/models";
import { History } from "./History";
import { CurrencyType } from "./models";
import { Collection } from "./Collection";
/**
 * @endpoint https://poe.ninja/api/data/CurrencyOverview
 * @param league
 * @param type
 * @param language
 */
export declare const get: (league: string, type: CurrencyType, language?: LanguageCode) => Promise<Collection>;
/**
 * @endpoint https://poe.ninja/api/data/CurrencyHistory
 * @param league
 * @param type
 * @param id
 */
export declare const getHistory: (league: string, type: CurrencyType, id: number) => Promise<History>;
