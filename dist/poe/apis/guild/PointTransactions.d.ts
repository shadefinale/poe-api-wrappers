import { Transformable } from "../../../common/classes";
import { PointTransaction } from "./PointTransaction";
export declare class PointTransactions extends Transformable {
    total: number;
    entries: PointTransaction[];
}
