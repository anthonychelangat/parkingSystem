import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileInputComponent } from './components/profile-input/profile-input.component';
import { EntryComponent } from './components/entry/entry.component';
import { ExitComponent } from './components/exit/exit.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HistoryComponent } from './components/history/history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { HomeComponent } from './components/home/home/home.component';
import { UpdateOfficerComponent } from './components/updateOfficer/update-officer/update-officer.component';
import { ListOfOfficersComponent } from './components/list_of_officers/list-of-officers/list-of-officers.component';
import { ChartsComponent } from './components/charts/charts/charts.component';
import { OfficerProfileComponent } from './components/officer-profile/officer-profile.component';
import { OfficerLoginComponent } from './components/officerLogin/officer-login/officer-login.component';
import { OfficerHomeComponent } from './components/officerHome/officer-home/officer-home.component';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ProfileInputComponent,
    EntryComponent,
    ExitComponent,
    SettingsComponent,
    HistoryComponent,
    HomeComponent,
    UpdateOfficerComponent,
    ListOfOfficersComponent,
    ChartsComponent,
    OfficerProfileComponent,
    OfficerLoginComponent,
    OfficerHomeComponent,
    FooterComponent
  ],
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatOptionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
