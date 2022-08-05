import { Component, OnInit } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ServicesService } from 'src/app/services/services.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
   const password = control.get('password')?.value;
   const confirmPassword = control.get('confirmPassword')?.value;

if(password && confirmPassword && password !== confirmPassword){
  return {
    passwordsDontMatch: true
  }
}else{
  return null;
    }
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
  }, {validators: passwordsMatchValidator()} )

  constructor(
    private authService: AuthenticationService,
     private service: ServicesService,
     private toast: HotToastService,
     private router: Router,
     ) { }

  ngOnInit(): void {}

  get name(){
    return this.signUpForm.get('name');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }

   signupSubmit(){
    if (!this.signUpForm.valid) return;

    const {name, email, password} = this.signUpForm.value;

    this.authService
    .signUp(email, password )
    .pipe(
      switchMap(({user: { uid } }) =>
      this.service.addAdmin({ uid, email, displayName: name })),
      this.toast.observe({
        success: 'Congrats! You are all signed up',
        loading: 'Signing in',
        error: 'There was an error'
      })
    )
    .subscribe(() => {
      this.router.navigate(['home']);
    })
  }

}
