import { Transformable } from "../../../../common/classes";
import { Ascendancy } from "./models";
export declare class Class extends Transformable {
    name: string;
    ascendancies: Ascendancy[];
    /**
     * @overrides `base_str`
     */
    baseStr: number;
    /**
     * @overrides `base_dex`
     */
    baseDex: number;
    /**
     * @overrides `base_int`
     */
    baseInt: number;
}
