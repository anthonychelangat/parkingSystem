import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-officer',
  templateUrl: './update-officer.component.html',
  styleUrls: ['./update-officer.component.css']
})
export class UpdateOfficerComponent implements OnInit {

  updateOfficerForm = new FormGroup({
    uid: new FormControl(''),
    firstName: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl(''),
    lastName: new FormControl(''),
    religion: new FormControl(''),
    displayName: new FormControl(''),
    district: new FormControl(''),
    doB: new FormControl(''),
    spouse: new FormControl(''),
   })

  constructor() { }

  ngOnInit(): void {
  }

  get uid(){
    return this.updateOfficerForm.get('uid');
  }

  get firstName(){
    return this.updateOfficerForm.get('firstName');
  }

  get lastName(){
    return this.updateOfficerForm.get('lastName');
  }

  get displayName(){
    return this.updateOfficerForm.get('displayName');
  }

  get address(){
    return this.updateOfficerForm.get('address');
  }

  get district(){
    return this.updateOfficerForm.get('district');
  }

  get religion(){
    return this.updateOfficerForm.get('religion');
  }

  get spouse(){
    return this.updateOfficerForm.get('spouse');
  }

  get doB(){
    return this.updateOfficerForm.get('doB');
  }

  get password(){
    return this.updateOfficerForm.get('password');
  }



  officerUpdate(){

  }

}
