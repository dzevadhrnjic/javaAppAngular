import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerByTransactionVehicleComponent } from './list-customer-by-transaction-vehicle.component';

describe('ListCustomerByTransactionVehicleComponent', () => {
  let component: ListCustomerByTransactionVehicleComponent;
  let fixture: ComponentFixture<ListCustomerByTransactionVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerByTransactionVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCustomerByTransactionVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
