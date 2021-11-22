import { Transformable } from "../../../../common/classes";
import { Class } from "./Class";
import { Constants, ExtraImage, Group, Node, SkillSprites } from "./models";
export declare class Data extends Transformable {
    classes: Class[];
    /**
     * @overrides `min_x`
     */
    minX: number;
    /**
     * @overrides `min_y`
     */
    minY: number;
    /**
     * @overrides `max_x`
     */
    maxX: number;
    /**
     * @overrides `max_y`
     */
    maxY: number;
    imageZoomLevels: number[];
    jewelSlots: number[];
    groups: {
        [key: string]: Group;
    };
    nodes: {
        [key: string]: Node;
    };
    extraImages: {
        [key: string]: ExtraImage;
    };
    assets: {
        [key: string]: {
            [key: string]: string;
        };
    };
    constants: Constants;
    skillSprites: SkillSprites;
}
