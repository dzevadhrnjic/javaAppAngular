import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LicensePlate } from './model/license.plate';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  dataRefreshed = new Subject<boolean>();
  
  private addLicensePlateUrl = 'http://localhost:8080/api/licensePlate/addLicensePlate'

  constructor(private httpClient: HttpClient) { }

  addLicensePlate(licensePlate: LicensePlate){
    this.httpClient.post(this.addLicensePlateUrl,licensePlate).subscribe(x =>{
        this.dataRefreshed.next(true);
    })
  }
}
