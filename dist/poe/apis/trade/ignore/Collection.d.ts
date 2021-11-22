import { Transformable } from "../../../../common/classes";
import { Account } from "./models/Account";
import { Pagination } from "./models/Pagination";
export declare class Collection extends Transformable {
    pagination: Pagination;
    /**
     * @overrides `result`
     */
    accounts: Account[];
}
