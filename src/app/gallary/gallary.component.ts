import { Component, OnInit,  HostListener} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent implements OnInit {

  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler(event) {
  //   console.log('...........I am called',event.eventPhase);
  //   event.returnValue = false;
  //   }
// @HostListener('window:beforeunload', ['$event'])
//     beforeunloadHandler(event) {
//       console.log('...........I am also called',event.eventPhase);
//       event.returnValue = false;
//      }
    
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieService.set( 'Test', 'Hello World' );
    document.getElementById("value").innerHTML = this.cookieService.get('Test');
  }

}
