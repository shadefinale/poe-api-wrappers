import { Transformable } from "../../../common/classes";
import { Realm, RealmOptions } from "../../shared/models";
import * as Characters from "../characters";
import { Guild } from "../guild";
import { Stream } from "../streams";
import { Challenges } from "./models";
export declare class Account extends Transformable {
    name: string;
    realm: Realm;
    challenges?: Challenges;
    twitch?: Stream;
    guild?: Guild;
    /**
     * @remarks
     * Trying to get characters when the profile or character tab is private will result in an error.
     *
     * @param options
     * @returns A list of characters from this account
     * @throws [[APIError]]
     */
    getCharacters(options?: RealmOptions): Promise<Characters.Character[]>;
}
