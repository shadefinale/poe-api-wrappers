import { Transformable } from "../../../common/classes";
import { Account } from "../account";
import { Guild } from "./Guild";
export declare class PointTransaction extends Transformable {
    id: number;
    points: number;
    status: string;
    notes: string[];
    manual: boolean;
    guild: Guild;
    account: Account;
    createdAt: Date;
}
