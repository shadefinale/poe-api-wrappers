import { Transformable } from "../../../common/classes";
import { Language } from "../../shared/models";
import { Item } from "./Item";
export declare class Collection extends Transformable {
    /**
     * @overrides `lines`
     */
    entries: Item[];
    language: Language;
}
