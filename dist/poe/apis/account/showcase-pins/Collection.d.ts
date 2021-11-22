import { Transformable } from "../../../../common/classes";
import { ShowcasePin } from "./ShowcasePin";
export declare class Collection extends Transformable {
    total: number;
    account: string;
    entries: ShowcasePin[];
}
