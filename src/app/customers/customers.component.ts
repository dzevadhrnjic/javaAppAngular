import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  customerAddress: string = '';
  accountCreatedDate: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
