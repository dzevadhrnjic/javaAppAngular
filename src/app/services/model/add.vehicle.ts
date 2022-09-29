export class AddVehicle{

    vehicleTypeId: number;
    customerAccountId: number;
    isAssigned: number;

    constructor(vehicleTypeId: number, customerAccountId: number, isAssigned: number){
        this.vehicleTypeId = vehicleTypeId;
        this.customerAccountId = customerAccountId;
        this.isAssigned = isAssigned;
    }
}