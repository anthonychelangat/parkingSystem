import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-profile-input',
  templateUrl: './profile-input.component.html',
  styleUrls: ['./profile-input.component.css']
})
export class ProfileInputComponent implements OnInit {

  user$ = this.service.currentUserProfile$;

  profileInputForm = new FormGroup({
    uid: new FormControl(''),
    displayName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    religion: new FormControl(''),
    spouse: new FormControl(''),
    password: new FormControl(''),
    district: new FormControl(''),
    doB: new FormControl(''),
  })

  constructor(
     private toast: HotToastService,
     private service: ServicesService) { }

  ngOnInit(): void {
    this.service.currentUserProfile$
    .pipe(untilDestroyed(this), tap(console.log))
    .subscribe((user) => {
      this.profileInputForm.patchValue({ ...user });
    });
  }


  submitProfile(){
    const profileData:any = this.profileInputForm.value;
    this.service.addUser(profileData)
    .pipe(
      this.toast.observe({
        loading: 'Updating profile',
        success: 'Profile updated',
        error: 'There was an error will updating  profile'
      })
    )
    .subscribe();
  }

}
