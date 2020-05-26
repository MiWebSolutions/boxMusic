import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../../shared/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  public userLogued: Observable<firebase.User>;

  onUser;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.userLogued = afAuth.authState;
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.updateUserData(result.user);
      console.log("Usuario registrado");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await this.afAuth.signOut();
      console.log("Usuario logout");
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async getCurrentUserID() {
    try {
      this.onUser = await this.afAuth.currentUser;
      if (this.onUser != null) {
        return this.onUser.id;
      }
    } catch (error) {
      console.log(error);
    }
  }
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.id,
      email: user.email,
      roles: {
        publisher: true
      }
    }
    return userRef.set(data, { merge: true });
  }
}
