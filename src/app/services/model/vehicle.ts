export class Vehicle{
    vehicleId: number;
    vehicleTypeId: number;
    customerAccountId: number;
    isAssigned: number;

    constructor(vehicleId: number, vehicleTypeId: number, customerAccountId: number, isAssigned: number){
        this.vehicleId = vehicleId;
        this.vehicleTypeId = vehicleTypeId;
        this.customerAccountId = customerAccountId;
        this.isAssigned = isAssigned;

    }
}