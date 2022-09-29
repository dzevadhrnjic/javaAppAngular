import { Component, Input, OnInit } from '@angular/core';
import { CreateTransaction} from '../services/model/create.transaction';
import { CustomerService } from "../services/customer.service";
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  transactionTypeId: number = 0;
  customerAccountId: number = 0;
  amount: number = 0;

  // @Input() createTransaction: any = [this.transactionTypeId, this.customerAccountId, this.amount]

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  onSaveButtonClick(){
    var createTransaction = new CreateTransaction(this.transactionTypeId, this.customerAccountId, this.amount)
    this.transactionService.createTransaction(createTransaction)
    console.log(createTransaction)
  }

}
