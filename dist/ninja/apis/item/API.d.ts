import { HistoryPoint } from "../../shared";
import { LanguageCode } from "../../shared/models";
import { ItemType } from "./models";
import { Collection } from "./Collection";
/**
 * @endpoint https://poe.ninja/api/data/ItemOverview
 * @param league
 * @param type
 * @param language
 */
export declare const get: (league: string, type: ItemType, language?: LanguageCode) => Promise<Collection>;
/**
 * @endpoint https://poe.ninja/api/data/ItemHistory
 * @param league
 * @param type
 * @param id
 */
export declare const getHistory: (league: string, type: ItemType, id: number) => Promise<HistoryPoint[]>;
