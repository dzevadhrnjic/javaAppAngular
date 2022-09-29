import { Component, OnInit } from '@angular/core';
import { LicensePlateService } from '../services/license-plate.service';
import { LicensePlate } from '../services/model/license.plate';

@Component({
  selector: 'app-add-license-plate',
  templateUrl: './add-license-plate.component.html',
  styleUrls: ['./add-license-plate.component.css']
})
export class AddLicensePlateComponent implements OnInit {

  vehicleId: number = 0;
  lpnumber: string = '';
  lpstate: string = '';

  constructor(private licensePlateService: LicensePlateService) { }

  ngOnInit(): void {
  }

  onSaveButtonClick(){
    var addLicense = new LicensePlate(this.vehicleId, this.lpnumber, this.lpstate)
    this.licensePlateService.addLicensePlate(addLicense)
    console.log(addLicense)
  }

}
