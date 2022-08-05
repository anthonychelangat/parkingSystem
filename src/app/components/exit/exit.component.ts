import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  exitForm = new FormGroup({
    uid: new FormControl(''),
    numberPlate: new FormControl(''),
    exitTime: new FormControl(''),
   })

  exitTime: object = new Date();

  constructor(
    private toast: HotToastService,
    private service: ServicesService) { }

  ngOnInit(): void {
    this.service.currentUserProfile$
    .pipe(
      untilDestroyed(this),
      tap(console.log))
    .subscribe((car) => {
      this.exitForm.patchValue({ ...car });
    });
  }

  carExitSubmit(){
    const profileData:any = this.exitForm.value;
    this.service.updateCar(profileData)
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

