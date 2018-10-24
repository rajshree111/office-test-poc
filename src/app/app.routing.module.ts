import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingChangesGuard } from './pending-changes.guard';

import {ContactusComponent} from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';
import {GallaryComponent} from './gallary/gallary.component';
import {StoriesComponent} from './stories/stories.component';
import {LoginComponent} from './core/login/login.component';

import {TestComponent} from './test/test.component';

import { LoginActivateService } from './login-activate.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'stories', component: StoriesComponent , canActivate: [ LoginActivateService ]},
  { path: 'gallary', component: GallaryComponent },
  { path: 'login', component: LoginComponent, canDeactivate: [PendingChangesGuard]},
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
