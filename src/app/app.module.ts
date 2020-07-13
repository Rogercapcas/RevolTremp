import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { WelcomepageComponent } from './Components/welcomepage/welcomepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
