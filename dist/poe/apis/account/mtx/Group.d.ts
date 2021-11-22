import { Transformable } from "../../../../common/classes";
import { Item } from "./Item";
export declare class Group extends Transformable {
    group: string;
    groupName: string;
    /**
     * @overrides `MTXItems`
     */
    items: Item[];
}
