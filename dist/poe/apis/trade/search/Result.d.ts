import { Fetch } from "../";
import { Transformable } from "../../../../common/classes";
export declare class Result extends Transformable {
    private offset;
    id: string;
    complexity: number | null;
    total: number;
    inexact?: boolean;
    /**
     * @overrides `result`
     */
    hashes: string[];
    /**
     * @returns A list of item listings in sets of 10, `null` when there are no more listings to fetch
     * @throws [[APIError]]
     */
    getNextItems(): Promise<Fetch.Result[] | null>;
}
