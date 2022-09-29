import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerDateVehicleComponent } from './list-customer-date-vehicle.component';

describe('ListCustomerDateVehicleComponent', () => {
  let component: ListCustomerDateVehicleComponent;
  let fixture: ComponentFixture<ListCustomerDateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerDateVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCustomerDateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
