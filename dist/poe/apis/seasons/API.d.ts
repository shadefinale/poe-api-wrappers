import { PlayerHistoryOptions, SeasonOptions } from "./models";
import { PlayerHistory } from "./PlayerHistory";
import { Season } from "./Season";
/**
 * @endpoint https://www.pathofexile.com/api/seasons
 * @param options
 * @returns A list of all seasons
 * @throws [[APIError]]
 */
export declare const get: (options?: SeasonOptions | undefined) => Promise<Season[]>;
/**
 * @remarks
 * This data is available even if the profile of the account is set to private
 *
 * @endpoint https://www.pathofexile.com/api/season-player-history
 * @param seasonId
 * @param accountName
 * @param options
 * @throws [[APIError]]
 */
export declare const getPlayerHistory: (seasonId: string, accountName: string, options?: PlayerHistoryOptions | undefined) => Promise<PlayerHistory>;
