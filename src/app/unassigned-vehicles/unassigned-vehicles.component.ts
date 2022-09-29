import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../services/model/vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-unassigned-vehicles',
  templateUrl: './unassigned-vehicles.component.html',
  styleUrls: ['./unassigned-vehicles.component.css']
})
export class UnassignedVehiclesComponent implements OnInit {

  @Input() vehicles1: Vehicle[] = []
  vehicleId: number = 0;
  vehicleTypeId: number = 0;
  customerAccountId: number = 0;
  isAssigned: number = 0;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }
}
