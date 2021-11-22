import { Transformable } from "../../../common/classes";
import { Item } from "../../shared/item";
import { StashType } from "../../shared/models";
export declare class Stash extends Transformable {
    id: string;
    public: boolean;
    accountName: string | null;
    lastCharacterName: string | null;
    stash: string | null;
    stashType: StashType;
    league: string | null;
    items: Item[];
}
