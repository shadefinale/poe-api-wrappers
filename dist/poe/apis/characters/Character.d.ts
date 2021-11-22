import { Transformable } from "../../../common/classes";
import { Depth } from "./models";
export declare class Character extends Transformable {
    name: string;
    level: number;
    class: string;
    classId?: number;
    league?: number;
    ascendancyClass?: number;
    id?: string;
    score?: number;
    experience: number;
    depth?: Depth;
    /**
     * Calculates the current level progression and returns it as a percentage value.
     */
    get levelProgression(): number;
}
