import * as Avatars from "./avatars";
import { AvatarsOptions, ShowcasePinOptions, StashOptions } from "./models";
import * as MTX from "./mtx";
import { Profile } from "./profile";
import * as ShowcasePins from "./showcase-pins";
import { Stash } from "./stash";
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/profile
 * @throws [[APIError]]
 */
export declare const getProfile: () => Promise<Profile>;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://pathofexile.com/api/account-avatar
 * @param options
 * @throws [[APIError]]
 */
export declare const getAvatars: (options?: AvatarsOptions | undefined) => Promise<Avatars.Collection>;
/**
 * @remarks
 * This data is available even if the profile of the account is set to private
 *
 * @endpoint https://www.pathofexile.com/api/account/showcase-pins
 * @param accountName
 * @param options
 * @throws [[APIError]]
 */
export declare const getShowcasePins: (accountName: string, options?: ShowcasePinOptions | undefined) => Promise<ShowcasePins.Collection>;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/character-window/get-stash-items
 * @param accountName
 * @param league
 * @param tabIndex
 * @param options
 * @throws [[APIError]]
 */
export declare const getStash: (accountName: string, league: string, tabIndex: number, options?: StashOptions | undefined) => Promise<Stash>;
/**
 * @endpoint https://pathofexile.com/character-window/get-account-name-by-character
 * @param characterName
 * @throws [[APIError]]
 */
export declare const getNameByCharacter: (characterName: string) => Promise<string>;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://pathofexile.com/character-window/get-mtx-stash-items
 * @param accountName
 * @param options
 * @throws [[APIError]]
 */
export declare const getMicrotransactions: (accountName: string, sortOrder?: "category" | "theme") => Promise<MTX.Group[]>;
