import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynamicInputComponent } from './dynamic-input-component/dynamic-input.component';
import { CustomerService } from './services/customer.service';
import { CreateCustomer } from './services/model/create.customer';
import { Customer } from './services/model/customer';
import { Transaction } from './services/model/transaction';
import { Vehicle } from './services/model/vehicle';
import { TransactionService } from './services/transaction.service';
import { VehicleService } from './services/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'javaApplicationFrontend';

  parentInputFields: any[] = []
  inputTypeApi: string = ''

  customer: any[] = [{ id: 'firstNameId', label: "Enter first name: ", placeholder: "First Name" },
  { id: "lastNameId", label: "Enter last name: ", placeholder: "Last Name" },
  { id: "customerAddressId", label: "Enter Customer Address: ", placeholder: "Customer Address" }]

  transaction: any[] = [{ id: 'transactionTypeId', label: "Enter transaction type: ", placeholder: "Transaction Type Id" },
  { id: 'customerAccountId', label: "Enter customer id: ", placeholder: "Customer Id" },
  { id: 'amountId', label: "Enter amount: ", placeholder: "amount" }]

  vehicle: any[] = [{ id: 'vehicleTypeId', label: "Enter vehicle type id: ", placeholder: "Vehicle type id" },
  { id: 'customerAccountId', label: "Enter customer id: ", placeholder: "customer id" },
  { id: 'isAssignedId', label: "Enter is assigned: ", placeholder: "is assigned" }]

  licensePlate: any[] = [{ id: 'vehicleId', label: "Enter vehicle id: ", placeholder: "vehicle id" },
  { id: 'lpnumberId', label: "Enter lpnumber: ", placeholder: "lpnumber" },
  { id: 'lpstateId', label: "Enter lpstate: ", placeholder: "lpstate" }]

  customerAccountId: any[] = [{ id: 'customerId', label: 'Enter customer account id: ', placeholder: 'customer id' }]

  license: any[] = [{ id: 'licensePlateId', label: "Enter license plate: ", placeholder: "license plate" }]

  date: any[] = [{ id: 'date', label: "Enter date: ", placeholder: "date" }]

  vehicles: Vehicle[] = []
  transactions: Transaction[] = []
  customers: Customer[] = []
  customersTV: Customer[] = []
  vehiclesState: Vehicle[] = []


  constructor(private vehicleService: VehicleService, 
    private transactionService: TransactionService, 
    private customerService: CustomerService,
    private dialogRef: MatDialog) { }

    openDialog(){
      this.dialogRef.open(DynamicInputComponent, {
      width:'300px',
      height: '400px',
      data: {
        inputType: this.inputTypeApi,
        inputFields: this.parentInputFields
      }
    })
  }

  onCustomerButtonClick() {
    this.parentInputFields = this.customer
    this.inputTypeApi = "Customer"
    
  }

  onTransactionButtonClick() {
    this.parentInputFields = this.transaction
    this.inputTypeApi = "Transaction"
  }

  onVehicleButtonClick() {
    this.parentInputFields = this.vehicle
    this.inputTypeApi = "Vehicle"
  }

  onLicensePlateButtonClick() {
    this.parentInputFields = this.licensePlate
    this.inputTypeApi = "LicensePlate"
  }

  onCustomerIdButtonClick() {
    this.parentInputFields = this.customerAccountId
    this.inputTypeApi = "CustomerAccountId"
  }

  onButtonClickUnassignedVehicles() {

    this.vehicleService.findAllUnassignedVehicles().subscribe((data: Vehicle[]) => {
      this.vehicles = data;
      console.log(data)
    })
    this.parentInputFields = this.customerAccountId
    this.inputTypeApi = "UnassignedVehilces"
  }

  onButtonClickCustomerTransactions() {

    this.parentInputFields = this.customerAccountId
    this.inputTypeApi = "TransactionCustomerId"
  }

  onButtonClickShowTransactions() {

    this.transactionService.findTransactionByType().subscribe(data => {
      this.transactions = data
    })

    this.inputTypeApi = "PaymentOrFeeTransations"
  }

  onButtonClickShowCustomerByCar() {

    this.customerService.findCustomerByCarType().subscribe(data => {
      this.customers = data
    })

    this.inputTypeApi = "CustomerCar"
  }

  onButtonClickShowCustomerbyLP() {
    this.parentInputFields = this.license
    this.inputTypeApi = "LicensePlateNumber"
  }

  onButtonClickShowCustomerByTAndVT() {

    this.inputTypeApi = "CustomerByTAndVT"

    this.customerService.findCustomerByTransactionAndVehicle().subscribe(data => {
      this.customersTV = data
    })

  }

  onButtonClickCustomerByDateAndUnassigned() {
    this.parentInputFields = this.date
    this.inputTypeApi = "DateAndVehicle"
  }

  onButtonClickShowCarsByLPState() {
    this.vehicleService.findVehiclesByState().subscribe(data => {
      this.vehiclesState = data
    })

    this.inputTypeApi = "LPstate"
  }
}
function Inject(MAT_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

