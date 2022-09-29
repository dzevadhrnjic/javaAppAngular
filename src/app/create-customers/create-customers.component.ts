import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from "../services/customer.service";
import { CreateCustomer } from '../services/model/create.customer';

@Component({
  selector: 'app-create-customers',
  templateUrl: './create-customers.component.html',
  styleUrls: ['./create-customers.component.css']
})
export class CreateCustomersComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  customerAddress: string = '';
  accountCreatedDate: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSaveButtonClick() {
    
  }

}
