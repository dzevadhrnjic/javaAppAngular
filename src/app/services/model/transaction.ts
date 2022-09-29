export class Transaction{
    transactionId: number;
    transactionTypeId: number;
    customerAccountId: number;
    amount: number;
    transactionDate: string;

    constructor(transactionId: number, transactionTypeId: number, customerAccountId: number, amount: number, transactionDate: string){
        this.transactionId = transactionId;
        this.transactionTypeId = transactionTypeId;
        this.customerAccountId = customerAccountId;
        this.amount = amount
        this.transactionDate = transactionDate;
    }
}