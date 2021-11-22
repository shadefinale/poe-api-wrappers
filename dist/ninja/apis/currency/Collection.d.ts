import { Transformable } from "../../../common/classes";
import { Language } from "../../shared/models";
import { Currency } from "./Currency";
import { CurrencyDetail } from "./CurrencyDetail";
export declare class Collection extends Transformable {
    /**
     * @overrides `lines`
     */
    entries: Currency[];
    currencyDetails: CurrencyDetail[];
    language: Language;
}
