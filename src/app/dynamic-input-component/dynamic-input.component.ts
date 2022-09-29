import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { } from '@angular/material'
import { AppComponent } from '../app.component';
import { CustomerService } from '../services/customer.service';
import { LicensePlateService } from '../services/license-plate.service';
import { AddVehicle } from '../services/model/add.vehicle';
import { CreateCustomer } from '../services/model/create.customer';
import { CreateTransaction } from '../services/model/create.transaction';
import { CreateVehicle } from '../services/model/create.vehicle';
import { Customer } from '../services/model/customer';
import { LicensePlate } from '../services/model/license.plate';
import { Transaction } from '../services/model/transaction';
import { Vehicle } from '../services/model/vehicle';
import { TransactionService } from '../services/transaction.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-dynamic-input-component',
  templateUrl: './dynamic-input-component.component.html',
  styleUrls: ['./dynamic-input-component.component.css']
})
export class DynamicInputComponent implements OnInit {

  showComponent = false;
  showComponent1 = false;

  @Input() inputFields: any = [{ id: '', inputValue: '', label: '', placeholder: '' }]
  @Input() inputType: any = '';

  constructor(public dialogRef: MatDialogRef<DynamicInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {inputType: any, inputFields: any},
   private customerService: CustomerService, private transactionService: TransactionService,
    private vehicleService: VehicleService, private licensePlateService: LicensePlateService) { }

  ngOnInit(): void {
  }

  @Input() vehicles: Vehicle[] = []
  @Input() unassigned: Vehicle[] = []
  @Input() transactions: Transaction[] = []
  @Input() customers: Customer[] = []
  @Input() customersDUV: Customer[] = []

  firstName: string = ''
  lastName: string = ''
  customerAddress: string = ''

  transactionType: number = 0;
  customerAccountId: number = 0;
  amount: number = 0;
  vehicleTypeId: number = 0;
  isAssigned: number = 0;

  vehicleId: number = 0;
  lpnumber: string = '';
  lpstate: string = '';
  licensePlateNumber: string = '';

  date: string = '';

  onSaveButtonClick() {
    if (this.inputType === "Customer") {
      this.createCustomer()
    } else if (this.inputType === "Transaction") {
      this.createTransaction()
    } else if (this.inputType === "Vehicle") {
      this.addVehicle()
    } else if (this.inputType === "LicensePlate") {
      this.addLicensePlate()
    } else if (this.inputType === "CustomerAccountId") {
      this.onClickSearchVehicles()
    } else if (this.inputType === "TransactionCustomerId") {
      this.onClickListTransactionsByCustomerId()
    } else if (this.inputType === "LicensePlateNumber") {
      this.onClickFindCustomerByLP()
    } else if (this.inputType === "DateAndVehicle"){
      this.onClickFindCustomerByDateAndVehicle()
    }
  }

  onClickSearchVehicles() {

    for (let i = 0; i < this.inputFields.length; i++) {
      if (this.inputFields[i].id === "customerId") {
        this.customerAccountId = this.inputFields[i].inputValue
      }
    }
    this.vehicleService.findVehiclesByCustomerId(this.customerAccountId).subscribe(data => {
      this.vehicles = data;
      console.log(data)
      console.log(this.customerAccountId)
      this.showComponent = true
    })
  }


  onClickListTransactionsByCustomerId() {

    for (let i = 0; i < this.inputFields.length; i++) {
      if (this.inputFields[i].id === "customerId") {
        this.customerAccountId = this.inputFields[i].inputValue
      }
    }
    this.transactionService.findTransactionsByCustomerId(this.customerAccountId).subscribe(data => {
      this.transactions = data
      console.log(data)
      console.log(this.customerAccountId)
    })
  }

  createCustomer() {
    for (let i = 0; i < this.inputFields.length; i++) {
      switch (this.inputFields[i].id) {
        case "firstNameId":
          this.firstName = this.inputFields[i].inputValue
          break;
        case "lastNameId":
          this.lastName = this.inputFields[i].inputValue
          break;
        case "customerAddressId":
          this.customerAddress = this.inputFields[i].inputValue
          break;
      }
    }

    var createCustomer = new CreateCustomer(this.firstName, this.lastName, this.customerAddress)
    this.customerService.createCustomer(createCustomer)
    console.log(createCustomer)


  }

  createTransaction() {
    for (let i = 0; i < this.inputFields.length; i++) {
      switch (this.inputFields[i].id) {
        case "transactionTypeId":
          this.transactionType = this.inputFields[i].inputValue
          break;
        case "customerAccountId":
          this.customerAccountId = this.inputFields[i].inputValue
          break;
        case "amountId":
          this.amount = this.inputFields[i].inputValue
          break;
      }
    }

    var createTransaction = new CreateTransaction(this.transactionType, this.customerAccountId, this.amount)
    this.transactionService.createTransaction(createTransaction)
    console.log(createTransaction)
  }

  addVehicle() {
    for (let i = 0; i < this.inputFields.length; i++) {
      switch (this.inputFields[i].id) {
        case "vehicleTypeId":
          this.vehicleTypeId = this.inputFields[i].inputValue
          break;
        case "customerAccountId":
          this.customerAccountId = this.inputFields[i].inputValue
          break;
        case "isAssignedId":
          this.isAssigned = this.inputFields[i].inputValue
          break;
      }
    }

    var addVehicle = new AddVehicle(this.vehicleTypeId, this.customerAccountId, this.isAssigned)
    this.vehicleService.createVehicle(addVehicle)
    console.log(addVehicle)
  }

  addLicensePlate() {
    for (let i = 0; i < this.inputFields.length; i++) {
      switch (this.inputFields[i].id) {
        case "vehicleId":
          this.vehicleId = this.inputFields[i].inputValue
          break;
        case "lpnumberId":
          this.lpnumber = this.inputFields[i].inputValue
          break;
        case "lpstateId":
          this.lpstate = this.inputFields[i].inputValue
          break;
      }
    }

    var addLicensePlate = new LicensePlate(this.vehicleId, this.lpnumber, this.lpstate)
    this.licensePlateService.addLicensePlate(addLicensePlate)
    console.log(addLicensePlate)
  }

  onClickFindCustomerByLP() {

    for (let i = 0; i < this.inputFields.length; i++) {
      if (this.inputFields[i].id === "licensePlateId") {
        this.licensePlateNumber = this.inputFields[i].inputValue
      }


      this.customerService.findCustomerByLicensePlate(this.licensePlateNumber).subscribe(data => {
        this.customers = data
        console.log(data)
        console.log(this.licensePlateNumber)
      })
    }
  }

  onClickFindCustomerByDateAndVehicle() {

    for (let i = 0; i < this.inputFields.length; i++) {
      if (this.inputFields[i].id === "date") {
        this.date = this.inputFields[i].inputValue
      }

      this.customerService.findCustomerByDateAndVehicle(this.date).subscribe(data => {
        this.customersDUV = data
        console.log(data)
      })
    }
  }

}




