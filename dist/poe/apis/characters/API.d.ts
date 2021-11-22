import { RealmOptions } from "../../shared/models";
import { Character } from "./Character";
import { Items } from "./Items";
import { PassiveSkills } from "./PassiveSkills";
/**
 * @remarks
 * Requires `sessionId` to be set in [[Settings]] if profile or character tab is private.
 *
 * @endpoint https://www.pathofexile.com/character-window/get-characters
 * @param accountName
 * @param options
 * @returns A list of characters of an account
 * @throws [[APIError]]
 */
export declare const get: (accountName: string, options?: RealmOptions | undefined) => Promise<Character[]>;
/**
 * @remarks
 * Requires `sessionId` to be set in [[Settings]] if profile or character tab is private.
 *
 * @endpoint https://www.pathofexile.com/character-window/get-items
 * @param accountName
 * @param character
 * @param options
 * @throws [[APIError]]
 */
export declare const getItems: (accountName: string, character: string, options?: RealmOptions | undefined) => Promise<Items>;
/**
 * @remarks
 * Requires `sessionId` to be set in [[Settings]] if profile or character tab is private.
 *
 * @endpoint https://www.pathofexile.com/character-window/get-passive-skills
 * @param accountName
 * @param character
 * @param options
 * @throws [[APIError]]
 */
export declare const getPassiveSkills: (accountName: string, character: string, options?: RealmOptions | undefined) => Promise<PassiveSkills>;
