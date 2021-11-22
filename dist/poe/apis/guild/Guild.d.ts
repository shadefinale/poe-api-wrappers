import { Transformable } from "../../../common/classes";
export declare class Guild extends Transformable {
    id: string;
    name: string;
    tag: string;
    points: number;
    statusMessage: string;
    createdAt: Date;
}
