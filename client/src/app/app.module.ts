import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewAllComponent } from './components/view-all/view-all.component';

// routing links
const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent },
  { path: 'view-booking', component: ViewAllComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SidemenuComponent,
    DashboardComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
