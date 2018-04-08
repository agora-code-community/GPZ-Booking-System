import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './_layout/login-layout/login-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { BookFormComponent } from './components/book-form/book-form.component';

// routing links
const appRoutes: Routes = [

  // Login routes goes here here
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
       { path: '', component: LoginComponent, pathMatch: 'full' }
    ]
  },

  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'view-booking', component: ViewAllComponent },
      { path: 'add-booking', component: BookFormComponent },
    ]
  }
]; // ends routes

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    NavbarComponent,
    LoginComponent,
    SidemenuComponent,
    DashboardComponent,
    ViewAllComponent,
    AppLayoutComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
