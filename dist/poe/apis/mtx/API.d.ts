import { Collection } from "./Collection";
import { SpecialsOptions } from "./models";
/**
 * @endpoint https://pathofexile.com/api/shop/microtransactions/specials
 * @param options
 * @throws [[APIError]]
 */
export declare const getSpecials: (options?: SpecialsOptions | undefined) => Promise<Collection>;
