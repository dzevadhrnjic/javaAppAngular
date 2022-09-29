import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../services/model/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit {

  @Input() transactions: Transaction[] = []
  transactionId: number = 0;
  transactionTypeId: number = 0;
  customerAccountId: number = 0;
  amount: number = 0;
  transactionDate: string = '';

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  onClickListTransactionsByCustomerId(){
    this.transactionService.findTransactionsByCustomerId(this.customerAccountId).subscribe(data => {
      this.transactions = data
      console.log(data)
    })
  }

}
