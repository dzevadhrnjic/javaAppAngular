import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../services/model/vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  @Input() vehicles: Vehicle[] = []
  vehicleId: number = 0;
  vehicleTypeId: number = 0;
  customerAccountId: number = 0;
  isAssigned: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  

}
