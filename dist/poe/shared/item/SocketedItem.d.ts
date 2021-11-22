import { ItemBase } from "./ItemBase";
import { Property, SocketColour } from "./models";
export declare class SocketedItem extends ItemBase {
    properties: Property[];
    descrText: string;
    socket: number;
    colour: SocketColour | null;
}
