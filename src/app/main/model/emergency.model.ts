export class EmergencyMain {
    device: Device;
    emergency: Emergency;
    holder: Holder;

    constructor(obj?: any) {
        this.device = obj && new Device(obj.device) || new Device();
        this.emergency = obj && new Emergency(obj.emergency) || new Emergency();
        this.holder = obj && new Holder(obj.holder) || new Holder();
    }
}

export class Emergency {
    emergencyId: string;
    requestTime: string;

    constructor(obj?: any) {
        this.emergencyId = obj && obj.emergencyId || '';
        this.requestTime = obj && obj.requestTime || '';
    }
}

export class Device {
    serialNumber: string;

    constructor(obj?: any) {
        this.serialNumber = obj && obj.serialNumber || '';
    }
}

export class Holder {
    firstName: string;
    lastName: string;

    constructor(obj?: any) {
        this.firstName = obj && obj.firstName || '';
        this.lastName = obj && obj.lastName || '';
    }
}

