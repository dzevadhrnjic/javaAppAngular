export class CreateCustomer{
    firstName: string;
    lastName: string;
    customerAddress: string;

    constructor(firstName: string, lastName: string, customerAddress: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.customerAddress = customerAddress;
    }
}