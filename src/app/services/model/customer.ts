export class Customer{
    customerAccountId: number;
    firstName: string;
    lastName: string;
    customerAddress: string;
    accountCreatedDate: string;

    constructor(customerAccountId: number,firstName: string, lastName: string, customerAddress: string, accountCreatedDate: string){
        this.customerAccountId = customerAccountId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.customerAddress = customerAddress;
        this.accountCreatedDate = accountCreatedDate;
    }
}