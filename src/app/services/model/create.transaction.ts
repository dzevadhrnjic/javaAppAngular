export class CreateTransaction{

    transactionTypeId: number;
    customerAccountId: number;
    amount: number;

    constructor(transactionTypeId: number, customerAccountId: number, amount: number){
        
        this.transactionTypeId = transactionTypeId;
        this.customerAccountId = customerAccountId;
        this.amount = amount;

    }
}