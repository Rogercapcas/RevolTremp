import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { WelcomepageComponent } from './Components/welcomepage/welcomepage.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { EditionsComponent } from './Components/editions/editions.component';
// import {JwtInterceptor} from './_helpers/jwt.interceptor';
// import {ErrorInterceptor} from './_helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomepageComponent,
    CalendarComponent,
    EditionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
