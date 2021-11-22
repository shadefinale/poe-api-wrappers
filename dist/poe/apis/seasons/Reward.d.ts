import { Transformable } from "../../../common/classes";
import { Item } from "../../shared/item";
export declare class Reward extends Transformable {
    requiredPoints: number;
    itemOffsetY: number | null;
    itemOffsetX: number | null;
    item: Item;
}
