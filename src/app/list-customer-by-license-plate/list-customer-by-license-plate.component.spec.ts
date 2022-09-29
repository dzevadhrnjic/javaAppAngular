import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerByLicensePlateComponent } from './list-customer-by-license-plate.component';

describe('ListCustomerByLicensePlateComponent', () => {
  let component: ListCustomerByLicensePlateComponent;
  let fixture: ComponentFixture<ListCustomerByLicensePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerByLicensePlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCustomerByLicensePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
