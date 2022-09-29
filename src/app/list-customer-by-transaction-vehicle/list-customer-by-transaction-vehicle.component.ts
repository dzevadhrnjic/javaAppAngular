import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../services/model/customer';

@Component({
  selector: 'app-list-customer-by-transaction-vehicle',
  templateUrl: './list-customer-by-transaction-vehicle.component.html',
  styleUrls: ['./list-customer-by-transaction-vehicle.component.css']
})
export class ListCustomerByTransactionVehicleComponent implements OnInit {

  @Input() customersTV: Customer[] = []
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }


}
