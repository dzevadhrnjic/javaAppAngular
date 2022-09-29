import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../services/model/vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-list-vehicles-by-state',
  templateUrl: './list-vehicles-by-state.component.html',
  styleUrls: ['./list-vehicles-by-state.component.css']
})
export class ListVehiclesByStateComponent implements OnInit {

  @Input() vehiclesState: Vehicle[] = []
  
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

}
