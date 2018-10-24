import { Injectable } from '@angular/core';
import { ReplaySubject,Observable ,of} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GallaryServiceService {

  constructor() { }

  getDetails(): Observable<any>
  {
    setTimeout(()=>{
      return of({'name':'shruti','age':25});
    },1000);
    
     return of({'name':'rajesh','age':30});

  }
}
