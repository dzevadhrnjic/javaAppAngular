import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CreateTransaction } from './model/create.transaction';
import { Transaction } from './model/transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  dataRefreshed = new Subject<boolean>();

  private createTransactionUrl = 'http://localhost:8080/api/ledger/postTransaction';
  private findTrasansactionByCustomerIdUrl = 'http://localhost:8080/api/ledger/';
  private findTransactionsByTypeUrl = 'http://localhost:8080/api/ledger/transactions'

  constructor(private httpClient: HttpClient) { }

  createTransaction(createTransaction: CreateTransaction) {
    this.httpClient.post<CreateTransaction>(this.createTransactionUrl, createTransaction).subscribe(x => {
      this.dataRefreshed.next(true);
    });
  }

  findTransactionsByCustomerId(id: number) {
    let transactions = this.httpClient.get<Transaction[]>(this.findTrasansactionByCustomerIdUrl + id)
    return transactions
  }

  findTransactionByType(){
    let paymentOrFee = this.httpClient.get<Transaction[]>(this.findTransactionsByTypeUrl)
    return paymentOrFee
  }
  


}
