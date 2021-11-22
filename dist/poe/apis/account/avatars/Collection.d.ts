import { Transformable } from "../../../../common/classes";
import { AvatarsOptions } from "../models";
import { Avatar } from "./Avatar";
export declare class Collection extends Transformable {
    private _options;
    collection: Avatar[];
    total: number;
    set options(options: AvatarsOptions);
    /**
     * @remarks
     * Uses the same [[AvatarsOptions]] that have been used getting this avatar collection.
     *
     * @param append If set to `true`, the avatars will be appended to the [[collection]] property
     * @returns The next set of avatars, `null` when there are no more entries
     * @throws [[APIError]]
     */
    getNextPage(append?: boolean): Promise<Avatar[] | null>;
}
