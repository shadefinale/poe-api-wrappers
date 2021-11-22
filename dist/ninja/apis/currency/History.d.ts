import { Transformable } from "../../../common/classes";
import { HistoryPoint } from "../../shared";
export declare class History extends Transformable {
    /**
     * @overrides `payCurrencyGraphData`
     */
    sell: HistoryPoint[];
    /**
     * @overrides `receiveCurrencyGraphData`
     */
    buy: HistoryPoint[];
}
