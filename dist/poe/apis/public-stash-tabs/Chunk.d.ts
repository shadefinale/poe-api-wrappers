import { Transformable } from "../../../common/classes";
import { Stash } from "./Stash";
export declare class Chunk extends Transformable {
    /**
     * @overrides `next_change_id`
     */
    nextChangeId: string;
    stashes: Stash[];
    /**
     * @throws [[APIError]]
     */
    getNext(): Promise<Chunk>;
}
