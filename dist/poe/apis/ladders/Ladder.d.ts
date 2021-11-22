import { Transformable } from "../../../common/classes";
import { Character } from "../characters";
import { Entry } from "./Entry";
import { Options } from "./models";
export declare class Ladder extends Transformable {
    private _options;
    private _leagueId;
    total: number;
    /**
     * @overrides `cached_since`
     */
    cachedSince: Date;
    entries: Entry[];
    set options(options: Options);
    set leagueId(id: string);
    /**
     * @remarks
     * Uses the same [[LadderOptions]] that have been used getting this ladder.
     * If you want to fetch an entire ladder, it is highly recommended to set the `limit` option to `200`.
     *
     * @param append Set to `true` if the next entries should be appended to this ladders entries
     * @returns The next set of ladder entries, `null` when there are no more entries
     */
    getNextEntries(append?: boolean): Promise<Entry[] | null>;
    /**
     * @example
     * Get all characters which have the Assassin ascendancy.
     *
     * ```typescript
     * const assassins = ladder.filterByCharacter("class", "Assassin");
     * console.log(`${assassins.length} of the first 200 characters are Assassins.`);
     * ```
     *
     * @param property Name of a character property
     * @param value Value of the property that should be filtered
     * @returns A new list of characters matching the filter
     */
    filterByCharacter<K extends keyof Character>(property: K, value: Character[K]): Entry[];
    /**
     * @example
     * Display online characters from the ladder.
     *
     * ```typescript
     * const online = ladder.filterBy("online", true);
     * console.log(`${online.length} of the first 200 characters are currently online.`);
     * ```
     *
     * @param property Name of a ladder entry property
     * @param value Value of the property that should be filtered
     * @returns A new list of characters matching the filter
     */
    filterBy<K extends keyof Entry>(property: K, value: Entry[K]): Entry[];
}
