import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../services/model/customer';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  @Input() customers: Customer[] = []

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

}
