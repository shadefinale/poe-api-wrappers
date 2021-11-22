import { Collection } from "./Collection";
import { MembersOptions } from "./models";
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @remarks
 * The account tied to the provided session id must be part of the private league.
 *
 * @endpoint https://www.pathofexile.com/api/private-league-member/<id>
 * @param id ID of the private league without `PL` prefix
 * @param options
 * @throws [[APIError]]
 */
export declare const getMembers: (id: number, options?: MembersOptions | undefined) => Promise<Collection>;
