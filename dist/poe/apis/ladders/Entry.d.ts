import { Transformable } from "../../../common/classes";
import { Account } from "../account";
import { Character } from "../characters";
export declare class Entry extends Transformable {
    rank: number;
    dead: boolean;
    retired?: boolean;
    public?: boolean;
    online: boolean;
    character: Character;
    account: Account;
    /**
     * @returns URL to the character window on the Path of Exile website
     */
    get characterWindowUrl(): string;
    /**
     * @returns URL to the account profile on the Path of Exile website
     */
    get profileUrl(): string;
}
