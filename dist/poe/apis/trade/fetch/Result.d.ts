import { Transformable } from "../../../../common/classes";
import { Item } from "../../../shared/item";
import { Listing } from "./Listing";
export declare class Result extends Transformable {
    id: string;
    item: Item;
    listing: Listing;
}
