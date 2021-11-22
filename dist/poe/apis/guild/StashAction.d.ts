import { Transformable } from "../../../common/classes";
import { Account } from "../account";
export declare class StashAction extends Transformable {
    id: string;
    league: string;
    item: string;
    action: string;
    time: Date;
    account: Account;
}
