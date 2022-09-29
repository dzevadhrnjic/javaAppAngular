import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {

  @Input() inputFields = [{label: "firstName", placeholder: "firstName "},
                      {label: "lastName", placeholder: "lastName"},
                      {label: "customerAddress", placeholder: "customerAddress"}]

  constructor() { }

  ngOnInit(): void {
  }

  showForm(){
    this.inputFields
    console.log(this.inputFields)
  }

}
