export class LicensePlate{
    vehicleId: number;
    lpnumber: string;
    lpstate: string;

    constructor(vehicleId: number, lpnumber: string, lpstate: string){
        this.vehicleId = vehicleId;
        this.lpnumber = lpnumber;
        this.lpstate = lpstate;
    }
}