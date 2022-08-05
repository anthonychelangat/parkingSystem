import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts/charts.component';
import { EntryComponent } from './components/entry/entry.component';
import { ExitComponent } from './components/exit/exit.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home/home.component';
import { ListOfOfficersComponent } from './components/list_of_officers/list-of-officers/list-of-officers.component';
import { LoginComponent } from './components/login/login.component';
import { OfficerProfileComponent } from './components/officer-profile/officer-profile.component';
import { OfficerHomeComponent } from './components/officerHome/officer-home/officer-home.component';
import { OfficerLoginComponent } from './components/officerLogin/officer-login/officer-login.component';
import { ProfileInputComponent } from './components/profile-input/profile-input.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateOfficerComponent } from './components/updateOfficer/update-officer/update-officer.component';

const routes: Routes = [
  {path: 'entry', component:EntryComponent},
  {path: 'exit', component:ExitComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'officer-profile', component:OfficerProfileComponent},
  {path: 'officerHome', component:OfficerHomeComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'profile-input', component:ProfileInputComponent},
  {path: 'settings', component:SettingsComponent},
  {path: 'history', component:HistoryComponent},
  {path: 'charts', component:ChartsComponent},
  {path: 'officer-list', component:ListOfOfficersComponent},
  {path: 'update-officer', component:UpdateOfficerComponent},
  {path: 'home', component:HomeComponent},
  {path: 'officer-login', component:OfficerLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
