import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { WelcomepageComponent} from './Components/welcomepage/welcomepage.component';
import {CalendarComponent} from './Components/calendar/calendar.component';
import {EditionsComponent} from './Components/editions/editions.component';
import {Edition} from './Models/edition';
import {HistoryComponent} from './Components/history/history.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomepageComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'editions', component: EditionsComponent},
  {path: 'history', component: HistoryComponent},
  ];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
