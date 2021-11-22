import { Transformable } from "../../../common/classes";
import { Realm } from "../../shared/models";
import * as Ladders from "../ladders";
import { Rule } from "./Rule";
export declare class League extends Transformable {
    id: string;
    realm: Realm;
    url: string;
    delveEvent: boolean;
    description?: string;
    timedEvent?: boolean;
    scoreEvent?: boolean;
    startAt: Date;
    endAt: Date | null;
    registerAt?: Date;
    rules?: Rule[];
    ladder?: Ladders.Ladder;
    /**
     * @remarks
     * If `store` is set to true the [[ladder]] property will be overwritten.
     *
     * @param options
     * @param store If set to `true`, the ladder will be saved in the [[ladder]] property
     * @returns The ladder for this league
     * @throws [[APIError]]
     */
    getLadder(options?: Ladders.Options, store?: boolean): Promise<Ladders.Ladder>;
}
