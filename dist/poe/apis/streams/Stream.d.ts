import { Transformable } from "../../../common/classes";
export declare class Stream extends Transformable {
    name: string;
    image?: string;
    status?: string;
    viewers?: number;
    id?: string;
    get url(): string;
}
