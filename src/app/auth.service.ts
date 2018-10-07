import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import {Router} from '@angular/router';
import {Users} from './contactus/Users';
import {User} from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

    auser: Users;

    users: AngularFirestoreCollection;

    isLogged: boolean;

    private messageSource = new BehaviorSubject(false);
    currentMessage = this.messageSource.asObservable();

    user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
        this.user = firebaseAuth.authState;

    }

    changeMessage(message: boolean) {
        this.messageSource.next(message);
    }

    signup(auser) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(auser.email, auser.password)
            .then(value => {
                console.log('Success!', value);
                return this.updateUserData( value.user,auser );

            })
            .catch(err => {
                confirm(err.message);
                console.log('Something went wrong:', err.message);
            });
    }

    login(email: string, password: string) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                this.changeMessage(true);
                console.log('Nice, it worked!');
                console.log(this.afs.collection('users'));
                this.router.navigate(['home']);
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }

    logout() {
        this.firebaseAuth
            .auth
            .signOut().then(value => {
            this.changeMessage(false);
        }).catch(err => {
            console.log('Something went wrong:', err.message);
        });
    }

    isLoggedIn() {
        this.currentMessage.subscribe(value => {
            console.log('.............................................' + value);
            this.isLogged = value;
        });
        return this.isLogged;
    }

    // Sets user data to firestore after succesful login
    private updateUserData(user: firebase.User, auser: Users) {
        //this.auser = new Users(this.ema);
        const userRef: AngularFirestoreDocument<Users> = this.afs.doc(
            `user/${user.uid}`
        );
        return userRef.set(Object.assign({}, auser), { merge: true });
    }
}

