import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CreateCustomer } from './model/create.customer';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  dataRefreshed = new Subject<boolean>();

  private customerUrl = 'http://localhost:8080/api/customers/'
  private createCustomerUrl = 'http://localhost:8080/api/customers/addCustomer';
  private findCustomerByCarTypeUrl = 'http://localhost:8080/api/customers/typeCar';
  private findCustomerByTransactionAndVehicleUrl = 'http://localhost:8080/api/customers/transactionAndVehicle'
  private findCustomerByDateAndVehicleUrl = 'http://localhost:8080/api/customers/dateAndVehicle?date='

  constructor(private httpClient: HttpClient) { }

  createCustomer(createCustomer: CreateCustomer) {
    this.httpClient.post<CreateCustomer>(this.createCustomerUrl, createCustomer).subscribe(x => {
      this.dataRefreshed.next(true);
    });
  }

  findCustomerByCarType(){
    let findByCarType = this.httpClient.get<Customer[]>(this.findCustomerByCarTypeUrl)
    return findByCarType
  }

  findCustomerByLicensePlate(licensePlate: string){
    let license = this.httpClient.get<Customer[]>(this.customerUrl + licensePlate)
    return license
  }

  findCustomerByTransactionAndVehicle(){
    let customers = this.httpClient.get<Customer[]>(this.findCustomerByTransactionAndVehicleUrl)
    return customers 
  }
  
  findCustomerByDateAndVehicle(date: string){
    let customers = this.httpClient.get<Customer[]>(this.findCustomerByDateAndVehicleUrl + date)
    return customers
  }
}
