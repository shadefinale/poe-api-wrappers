import { Transformable } from "../../../common/classes";
import { StashAction } from "./StashAction";
export declare class StashHistory extends Transformable {
    truncated: boolean;
    entries: StashAction[];
}
