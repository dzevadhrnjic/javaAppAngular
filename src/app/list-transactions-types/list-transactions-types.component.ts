import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../services/model/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-list-transactions-types',
  templateUrl: './list-transactions-types.component.html',
  styleUrls: ['./list-transactions-types.component.css']
})
export class ListTransactionsTypesComponent implements OnInit {

  @Input() transactions: Transaction[] = []

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }
}
