import { Transformable } from "../../../common/classes";
import { Sparkline } from "../../shared/models";
import { Exchange } from "./Exchange";
export declare class Currency extends Transformable {
    chaosEquivalent: number;
    detailsId: string;
    /**
     * @overrides `currencyTypeName`
     */
    name: string;
    /**
     * @overrides `paySparkLine`
     */
    sellSparkline: Sparkline;
    /**
     * @overrides `receiveSparkLine`
     */
    buySparkline: Sparkline;
    /**
     * @overrides `lowConfidencePaySparkLine`
     */
    lowConfidenceSellSparkline: Sparkline;
    /**
     * @overrides `lowConfidenceReceiveSparkLine`
     */
    lowConfidenceBuySparkline: Sparkline;
    /**
     * @overrides `pay`
     */
    sell?: Exchange;
    /**
     * @overrides `receive`
     */
    buy?: Exchange;
}
