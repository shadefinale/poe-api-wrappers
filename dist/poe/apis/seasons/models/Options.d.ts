import { RealmOptions } from "../../../shared/models";
export interface SeasonOptions {
    /**
     * If `true`, get only pvp seasons
     *
     * Default: `false`
     */
    pvp?: boolean;
}
export interface PlayerHistoryOptions extends RealmOptions {
    /**
     * Page offset
     *
     * Default: `1`
     */
    page?: number;
    /**
     * Results per page, but rather than the amount of entries, this value specifies the amount of trophies which should be fetched
     *
     * Default: `5`
     */
    perPage?: number;
}
