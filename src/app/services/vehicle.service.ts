import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AddVehicle } from './model/add.vehicle';
import { CreateVehicle } from '../services/model/create.vehicle';
import { Vehicle } from './model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  dataRefreshed = new Subject<boolean>();

  private addVehicleUrl = 'http://localhost:8080/api/vehicle/addVehicle';
  private findVehicleByCustomerIdUrl = 'http://localhost:8080/api/vehicle/';
  private unassignedVehiclesUrl = 'http://localhost:8080/api/vehicle/unassigned';
  private findVehiclesByStateUrl = 'http://localhost:8080/api/vehicle/licensePlatesByStates';

  constructor(private httpClient: HttpClient) { }

  createVehicle(createVehicle: CreateVehicle){
    this.httpClient.post<CreateVehicle>(this.addVehicleUrl, createVehicle).subscribe(x => {
      this.dataRefreshed.next(true)
    })
  }

  findVehiclesByCustomerId(customerAccountId: number){
    let vehicles = this.httpClient.get<Vehicle[]>(this.findVehicleByCustomerIdUrl + customerAccountId)
    return vehicles
  }

  findAllUnassignedVehicles(){
    let unassignedVehicles = this.httpClient.get<Vehicle[]>(this.unassignedVehiclesUrl)
    return unassignedVehicles
  }

  findVehiclesByState(){
    let vehicles = this.httpClient.get<Vehicle[]>(this.findVehiclesByStateUrl)
    return vehicles
  }

}
