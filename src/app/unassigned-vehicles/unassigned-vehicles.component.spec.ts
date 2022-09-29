import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedVehiclesComponent } from './unassigned-vehicles.component';

describe('UnassignedVehiclesComponent', () => {
  let component: UnassignedVehiclesComponent;
  let fixture: ComponentFixture<UnassignedVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnassignedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
