import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider'
import { MatButtonModule } from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';
import { CreateCustomersComponent } from './create-customers/create-customers.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ShowFormComponent } from './show-form/show-form.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AddLicensePlateComponent } from './add-license-plate/add-license-plate.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { UnassignedVehiclesComponent } from './unassigned-vehicles/unassigned-vehicles.component';
import { ListTransactionsComponent } from './list-transactions/list-transactions.component';
import { ListTransactionsTypesComponent } from './list-transactions-types/list-transactions-types.component';
import { ListVehicleTypesComponent } from './list-vehicle-types/list-vehicle-types.component';
import { ListCustomerByLicensePlateComponent } from './list-customer-by-license-plate/list-customer-by-license-plate.component';
import { ListCustomerByTransactionVehicleComponent } from './list-customer-by-transaction-vehicle/list-customer-by-transaction-vehicle.component';
import { ListCustomerDateVehicleComponent } from './list-customer-date-vehicle/list-customer-date-vehicle.component';
import { ListVehiclesByStateComponent } from './list-vehicles-by-state/list-vehicles-by-state.component';
import { DynamicInputComponent } from './dynamic-input-component/dynamic-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { PopupWindowComponent } from './popup-window/popup-window.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CreateCustomersComponent,
    CreateTransactionComponent,
    ShowFormComponent,
    AddVehicleComponent,
    AddLicensePlateComponent,
    ListCustomersComponent,
    ListVehiclesComponent,
    UnassignedVehiclesComponent,
    ListTransactionsComponent,
    ListTransactionsTypesComponent,
    ListVehicleTypesComponent,
    ListCustomerByLicensePlateComponent,
    ListCustomerByTransactionVehicleComponent,
    ListCustomerDateVehicleComponent,
    ListVehiclesByStateComponent,
    DynamicInputComponent,
    PopupWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [{provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} } ],
  bootstrap: [AppComponent],
  entryComponents: [DynamicInputComponent]
})
export class AppModule { }
