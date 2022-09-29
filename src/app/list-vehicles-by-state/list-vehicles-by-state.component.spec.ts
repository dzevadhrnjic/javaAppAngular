import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehiclesByStateComponent } from './list-vehicles-by-state.component';

describe('ListVehiclesByStateComponent', () => {
  let component: ListVehiclesByStateComponent;
  let fixture: ComponentFixture<ListVehiclesByStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVehiclesByStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVehiclesByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
