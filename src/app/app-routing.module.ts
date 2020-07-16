import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { WelcomepageComponent} from './Components/welcomepage/welcomepage.component';
import {CalendarComponent} from './Components/calendar/calendar.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomepageComponent},
  {path: 'calendar', component: CalendarComponent},
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
