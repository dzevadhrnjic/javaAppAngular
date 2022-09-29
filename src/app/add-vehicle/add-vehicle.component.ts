import { Component, OnInit } from '@angular/core';
import { AddVehicle } from '../services/model/add.vehicle';
import { CreateVehicle } from '../services/model/create.vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicleTypeId: number = 0;
  customerAccountId: number = 0;
  isAssigned: number = 0;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  onSaveButtonClick(){
    var create = new CreateVehicle(this.vehicleTypeId, this.customerAccountId, this.isAssigned)
    this.vehicleService.createVehicle(create)
    console.log(create)
  }

}
