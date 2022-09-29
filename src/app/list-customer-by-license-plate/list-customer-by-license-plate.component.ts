import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../services/model/customer';

@Component({
  selector: 'app-list-customer-by-license-plate',
  templateUrl: './list-customer-by-license-plate.component.html',
  styleUrls: ['./list-customer-by-license-plate.component.css']
})
export class ListCustomerByLicensePlateComponent implements OnInit {
 
  @Input() customers: Customer[] = []
  customerAccountId: number = 0;
  firstName: string = '';
  lastName: string = '';
  customerAddress: string = '';
  accountCreatedAt: string = ''; 

  licensePlate: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onClickFindCustomerByLP(){
    this.customerService.findCustomerByLicensePlate(this.licensePlate).subscribe(data => {
      this.customers = data
      console.log(data)
    })
  }

}
