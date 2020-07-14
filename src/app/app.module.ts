import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { WelcomepageComponent } from './Components/welcomepage/welcomepage.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomepageComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: this.JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: this.ErrorInterceptor, multi: true },

    // provider used to create fake backend
    (this.fakeBackendProvider)],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static JwtInterceptor: any;
  private static ErrorInterceptor: any;
}
