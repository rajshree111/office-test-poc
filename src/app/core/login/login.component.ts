import { Component, OnInit, HostListener } from '@angular/core';
import { ComponentCanDeactivate  } from '../../pending-changes.guard';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../user';
import { AuthService } from '../../auth.service';


import { Customer } from './customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, ComponentCanDeactivate{
  email: string;
  password: string;
  name: string;
  thisUser: any;

  pagetoshow: Boolean  = true;

  user$: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore , private authservice: AuthService) {
      console.log('inside constructor...');
//// Get auth data, then get firestore user document || null
this.user$ = this.afAuth.authState.pipe(
switchMap(user => {
if (user) {
this.thisUser=user;
  return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
} else {
  return of(null);
}
})
);
    }
 
signup(){
  return this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password).then(value => {
    console.log('Success!', value);
    this.loginPage();
    return this.updateUserData( value.user,new User(this.email,this.password,this.name) );

})
.catch(err => {
    confirm(err.message);
    console.log('Something went wrong:', err.message);
});

    }


    login() {
      this.authservice.login(this.email, this.password);
      this.email = this.password = '';
    }

    // Sets user data to firestore after succesful login
    private updateUserData(user: firebase.User, auser: User) {
      //this.auser = new Users(this.ema);
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(
          `user/${user.uid}`
      );
      return userRef.set(Object.assign({}, auser), { merge: true });
  }

  ngOnInit() {
    const mySaved= localStorage.getItem('cust') ;
    console.log(mySaved);
    const myObj = JSON.parse(mySaved);
    console.log(myObj);
    console.log(myObj.email);
    this.email = myObj.email;
  }

  loginPage() {
    this.pagetoshow = true;
  }

  signupPage() {
    this.pagetoshow = false;
  }

  @HostListener('window:beforeunload', ['$event'])
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    console.log('1111111111111111111111111111111111111111111111111111111111111');
    this.saveTheData();
    return false;
  }


    saveTheData(){
    localStorage.setItem('cust',JSON.stringify( new Customer(this.email, this.password)));
    }

}
