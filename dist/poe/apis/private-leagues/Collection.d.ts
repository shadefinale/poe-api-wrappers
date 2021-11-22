import { Transformable } from "../../../common/classes";
import { Member } from "./Member";
import { RoleElement, SortType } from "./models";
export declare class Collection extends Transformable {
    editable: boolean;
    total: number;
    sort: SortType;
    roles: RoleElement[];
    /**
     * @todo This isn't right
     */
    invitation: null;
    /**
     * @todo This isn't right
     */
    eligibleAccounts: null;
    members: Member[];
}
