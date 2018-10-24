import { Component, OnInit,  HostListener} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GallaryServiceService } from '../gallary-service.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent implements OnInit {

   data: any;

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    
    event.returnValue = false
  }
  constructor(private cookieService: CookieService, private gallaryServiceService: GallaryServiceService) { }

  ngOnInit() {

  this.gallaryServiceService.getDetails().subscribe(
    data=>{console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@'+JSON.stringify(data))
  this.data=data}
  );
  console.log("#########################"+this.data);

    this.cookieService.set( 'Test', 'Hello World' );
   // document.getElementById("value").innerHTML = this.cookieService.get('Test');
  }

}
