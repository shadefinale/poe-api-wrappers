import { Transformable } from "../../../../common/classes";
export declare class ShowcasePin extends Transformable {
    /**
     * @overrides `character_id`
     */
    characterId: number | null;
    /**
     * @overrides `foreign_id`
     */
    foreignId: string | null;
    position: number;
    type: string;
    label: string;
    id: number;
    icon: string;
}
