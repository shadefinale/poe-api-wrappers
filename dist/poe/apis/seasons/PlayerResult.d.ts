import { Transformable } from "../../../common/classes";
import { Trophy } from "./models";
export declare class PlayerResult extends Transformable {
    leagueId: string;
    leagueName: string;
    points: number;
    pvp: boolean;
    rank: number;
    /**
     * @overrides `accountid`
     */
    accountId: string;
    trophies: Trophy[];
}
