import { Transformable } from "../../../common/classes";
import { Item } from "../../shared/item";
import { Data } from "./skilltree/Data";
export declare class PassiveSkills extends Transformable {
    hashes: number[];
    /**
     * @overrides `visual_overrides`
     */
    visualOverrides: Array<Array<number | string>>;
    items: Item;
    /**
     * @remarks
     * `reqData` must be set to `1` when making the request to receive this data
     */
    skillTreeData?: Data;
}
