import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { ServicesService } from 'src/app/services/services.service';
import { untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entryForm = new FormGroup({
    uid: new FormControl(''),
    numberPlate: new FormControl(''),
    time: new FormControl(''),
    location: new FormControl(''),
    entryTime: new FormControl(''),
  })

  entryTime: object = new Date();


  constructor(
    private toast: HotToastService,
    private service: ServicesService) { }

  ngOnInit(): void {
    this.service.currentUserProfile$
    .pipe(
      untilDestroyed(this),
      tap(console.log))
    .subscribe((car) => {
      this.entryForm.patchValue({ ...car });
    });
  }

  carEntrySubmit(){
    const profileData:any = this.entryForm.value;
    this.service.addCar(profileData)
    .pipe(
      this.toast.observe({
        loading: 'Updating car details',
        success: 'car details updated',
        error: 'There was an error will updating  car details'
      })
    )
    .subscribe();
  }

  }

