import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-officer-profile',
  templateUrl: './officer-profile.component.html',
  styleUrls: ['./officer-profile.component.css']
})
export class OfficerProfileComponent implements OnInit {

  user$ = this.service.currentUserProfile$


  constructor(
    // private authService:AuthenticationService,
    // private router: Router,
     private service: ServicesService) { }

  ngOnInit(): void {
  }

}
