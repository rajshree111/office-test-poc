import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PendingChangesGuard } from './pending-changes.guard';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StoriesComponent } from './stories/stories.component';
import { GallaryComponent } from './gallary/gallary.component';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { CookieService } from 'ngx-cookie-service';
import { GallaryServiceService } from './gallary-service.service';



import * as admin from 'firebase-admin';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './core/login/login.component';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { TestComponent } from './test/test.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyA8y7brDTBunobigfd4xQWYcYHj-vUwCCM',
  authDomain: 'my-travel-website-6f84f.firebaseapp.com',
  databaseURL: 'https://my-travel-website-6f84f.firebaseio.com',
  projectId: 'my-travel-website-6f84f',
  storageBucket: 'my-travel-website-6f84f.appspot.com',
  messagingSenderId: '793702405867'

};

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    CarouselImageComponent,
    HeaderComponent,
    HomeComponent,
    ContactusComponent,
    StoriesComponent,
    LoginComponent,
    GallaryComponent,
    CustomCarouselComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    Ng2CarouselamosModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
      AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule,
      CoreModule,
      MaterialModule,
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    HttpClientModule
  ],
  providers: [LoginComponent,PendingChangesGuard,CookieService, GallaryServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
