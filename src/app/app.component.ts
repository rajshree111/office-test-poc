import { Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';

  constructor(private auth: AuthService){

  }
  ngOnDestroy() {
      window.onbeforeunload = function(e) {
        confirm('exiting......................');
          return 'Dialog text here.';
      };
  }
}
