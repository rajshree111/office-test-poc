import { Injectable } from '@angular/core';
import {CanActivate, NavigationEnd, RouterStateSnapshot} from '@angular/router';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateService implements CanActivate {

    currenturl: string;

    constructor(private authService: AuthService, private router: Router) {


    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        this.currenturl = state.url;
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
