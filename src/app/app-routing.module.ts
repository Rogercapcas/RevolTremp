import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { WelcomepageComponent} from './Components/welcomepage/welcomepage.component';
import {CalendarComponent} from './Components/calendar/calendar.component';
import {EditionsComponent} from './Components/editions/editions.component';
import {Edition} from './Models/edition';
import {HistoryComponent} from './Components/history/history.component';
import {ColaboradorsComponent} from './Components/colaboradors/colaboradors.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomepageComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'editions', component: EditionsComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'colaboradors', component: ColaboradorsComponent},
  ];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
