import { Injectable } from '@angular/core';
import { Firestore, doc, docData, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable, switchMap, of, from } from 'rxjs';
import { ProfileUser } from '../models/user-profile';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private firestore: Firestore,
    private authService: AuthenticationService
    ) { }

  get currentUserProfile$(): Observable<ProfileUser | null>{
      return this.authService.currentUser$.pipe(
        switchMap((user) => {

      if(!user?.uid){
        return of(null);
      }

      const ref = doc(this.firestore, 'users', user?.uid);
      return docData(ref) as Observable<ProfileUser>;
    })
    );
   }

  addUser(user: ProfileUser): Observable<any> {
  const ref = doc(this.firestore, 'users', user.uid);
  return from(setDoc(ref, user));
  }

  updateUser(user: ProfileUser): Observable<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(updateDoc(ref, { ...user }));
  }

  addAdmin(admin: ProfileUser): Observable<any> {
    const ref = doc(this.firestore, 'admins', admin.uid);
    return from(setDoc(ref, admin));
    }

  updateAdmin(admin: ProfileUser): Observable<void> {
      const ref = doc(this.firestore, 'admins', admin.uid);
      return from(updateDoc(ref, { ...admin }));
    }

  addCar(car: ProfileUser): Observable<any> {
      const ref = doc(this.firestore, 'cars', car.uid);
      return from(setDoc(ref, car));
    }

  updateCar(car: ProfileUser): Observable<void> {
      const ref = doc(this.firestore, 'cars', car.uid);
      return from(updateDoc(ref, { ...car }));
    }
}
