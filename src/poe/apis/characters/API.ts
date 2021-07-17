import { buildURL, requestTransformed } from "../../../common/functions";
import { RealmOptions } from "../../shared/models";
import { Character } from "./Character";
import { Items } from "./Items";
import { PassiveSkills } from "./PassiveSkills";

/**
 * @remarks
 * Requires [[Settings.setAuthorization | Authorization]] if profile or character tab is private
 *
 * @endpoint https://www.pathofexile.com/character-window/get-characters
 * @param accountName
 * @param options
 * @returns A list of characters of an account
 * @throws [[APIError]]
 */
export const get = async (accountName: string, options?: RealmOptions): Promise<Character[]> => {
    const url = buildURL(
        `https://www.pathofexile.com/character-window/get-characters`,
        options,
        null,
        { accountName }
    );

    return <Character[]>await requestTransformed(Character, url);
};

/**
 * @remarks
 * Requires [[Settings.setAuthorization | Authorization]] if profile or character tab is private
 *
 * @endpoint https://www.pathofexile.com/character-window/get-items
 * @param accountName
 * @param character
 * @param options
 * @throws [[APIError]]
 */
export const getItems = async (
    accountName: string,
    character: string,
    options?: RealmOptions
): Promise<Items> => {
    const url = buildURL(`https://www.pathofexile.com/character-window/get-items`, options, null, {
        accountName,
        character,
    });

    return <Items>await requestTransformed(Items, url);
};

/**
 * @remarks
 * Requires [[Settings.setAuthorization | Authorization]] if profile or character tab is private
 *
 * @endpoint https://www.pathofexile.com/character-window/get-passive-skills
 * @param accountName
 * @param character
 * @param options
 * @throws [[APIError]]
 */
export const getPassiveSkills = async (
    accountName: string,
    character: string,
    options?: RealmOptions
): Promise<PassiveSkills> => {
    const url = buildURL(
        `https://www.pathofexile.com/character-window/get-passive-skills`,
        options,
        null,
        { accountName, character }
    );

    return <PassiveSkills>await requestTransformed(PassiveSkills, url);
};
