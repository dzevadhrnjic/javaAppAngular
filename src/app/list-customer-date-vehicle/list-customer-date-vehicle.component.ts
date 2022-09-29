import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../services/model/customer';

@Component({
  selector: 'app-list-customer-date-vehicle',
  templateUrl: './list-customer-date-vehicle.component.html',
  styleUrls: ['./list-customer-date-vehicle.component.css']
})
export class ListCustomerDateVehicleComponent implements OnInit {

  @Input() customersDUV: Customer[] = [] 
  
  date: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }



}
