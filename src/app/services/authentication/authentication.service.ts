import { Injectable } from '@angular/core';
import { authState, Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserInfo, updateProfile } from '@angular/fire/auth';
import { from, Observable, of, concatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);
  notCurrentUser: any;

  constructor(private auth: Auth) { }


  login(email: any, password: any) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signUp(email: any, password: any){
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  updateAdminProfileData(profileData: Partial<UserInfo>): Observable<any> {
   const admin = this.auth.currentUser;
   return of(admin).pipe(
     concatMap(admin => {
        if(!admin) throw new Error('Not Authenticated');

       return updateProfile(admin, profileData);
      })
    )
  }

  logout(): Observable<any> {
    return from(this.auth.signOut());
  }


 }
