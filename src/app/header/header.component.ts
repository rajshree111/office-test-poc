import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {TranslateService} from '@ngx-translate/core';

import {User} from '../core/user';
import * as firebase from 'firebase/app';
import { LoginComponent } from '../core/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Boolean ;
  isAdmin: Boolean ;

  selected = 'en';

  constructor(private afs: AngularFirestore , public authService: AuthService, private logincom: LoginComponent, public translate: TranslateService) {
    translate.addLangs(["en", "hn"]);
    translate.setDefaultLang('en');
    translate.use(this.selected)

   }

  ngOnInit() {
    this.authService.currentMessage.subscribe(value => {

      this.isLoggedIn = value;

      console.log('***************************' + this.isLoggedIn);

    });

    //console.log("#####################################"+this.afs.doc<User>(`users/${this.logincom.thisUser.uid}`).valueChanges());

  }

  logout() {
    this.authService.logout();
  }

  doSomething($event){
   this.translate.use(this.selected)
  }

}
