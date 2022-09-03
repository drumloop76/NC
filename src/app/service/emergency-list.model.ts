import { EmergencyMain } from "../main/model/emergency.model";

export class EmergencyList {
    content: EmergencyMain[];

    constructor(obj?: any) {
        this.content = obj && obj.content && obj.content.map((elem: any) => new EmergencyMain(elem)) || [];
    }
}