import { Component, OnInit } from '@angular/core';
import {Users} from './users';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import {Observable} from 'rxjs';
import {stringify} from 'querystring';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  email: string;
  password: string;
  users: Users;


  constructor( private afs: AngularFirestore, private uploader: AngularFireStorage) {

  }

    handleFileInput(files: FileList) {
    console.log(files.item(0));
        this.uploader.ref('1235').put(files.item(0));
    //this.uploader.upload('/root/images', files.item(0));

    }

    getFileUploads() {
       console.log('.......................');
        console.log('************************************' +  this.uploader.ref('1234').getDownloadURL().subscribe(
            data => console.log(data)
        ));
    }
    register() {

    this.users = new Users( this.email, this.password, 'rajesh' );
    console.log('#########' + typeof this.users );
      this.afs.collection('laxman').add(Object.assign({}, this.users));
     // this.uploader.upload('root', ' ' );

    console.log('email...:' + this.email + 'password....:' + this.password);
    console.log('#############################' + this.users.name);
  }


  ngOnInit() {
  }

}
