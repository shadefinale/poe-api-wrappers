import { Transformable } from "../../../common/classes";
export declare class Exchange extends Transformable {
    id: number;
    count: number;
    value: number;
    /**
     * @overrides `league_id`
     */
    leagueId: number;
    /**
     * @overrides `pay_currency_id`
     */
    payCurrencyId: number;
    /**
     * @overrides `get_currency_id`
     */
    getCurrencyId: number;
    /**
     * @overrides `sample_time_utc`
     */
    sampleTime: Date;
    /**
     * @overrides `data_point_count`
     */
    dataPointCount: number;
    /**
     * @overrides `includes_secondary`
     */
    includesSecondary: boolean;
    /**
     * @overrides `listing_count`
     */
    listingCount: number;
}
