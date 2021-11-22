import { Transformable } from "../../../../common/classes";
export declare class Avatar extends Transformable {
    custom: boolean;
    name?: string | null;
    image: string;
    current: boolean;
    /**
     * @overrides `avatar_id`
     */
    id: number;
}
