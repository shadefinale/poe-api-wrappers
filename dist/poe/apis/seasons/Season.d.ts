import { Transformable } from "../../../common/classes";
import { Reward } from "./Reward";
export declare class Season extends Transformable {
    id: string;
    htmlId: string;
    htmlContent: string | null;
    signatureRaces: string | null;
    numericId: number;
    pvp: boolean;
    configEditorId: string | null;
    startAt: Date;
    endAt: Date;
    rewards: Reward[];
}
