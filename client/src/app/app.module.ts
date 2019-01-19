import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { AuthGuard } from './Guards/authGuard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './_layout/login-layout/login-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { BookFormComponent } from './components/book-form/book-form.component';

import { EventServiceService } from './services/event-service.service';
import { BookingServiceService } from './services/booking-service.service';
import { EditBookingComponent } from './components/edit-booking/edit-booking.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AddBookinComponent } from './components/add-bookin/add-bookin.component';
import { UtilsService } from './services/utils.service';
import { AuthServiceService } from './services/auth-service.service';
import { RoomsService } from './services/rooms.service';
import { SignupComponent } from './components/signup/signup.component';
import { CalendarModule } from 'angular-calendar';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InterceptorService } from './services/interceptor.service';
import { RoomsComponent } from './components/rooms/rooms.component';

// routing links
const appRoutes: Routes = [

    // todo: move routing links to a separate file for cleaner look
  // Login routes goes here here
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
       { path: '', component: LoginComponent, pathMatch: 'full' },
       { path: 'register', component: SignupComponent, pathMatch: 'full' }
    ]
  },

  {
    path: '',
    component: AppLayoutComponent,
    children: [

      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'view-booking', component: ViewAllComponent, canActivate: [AuthGuard] },
      { path: 'add-booking', component: BookFormComponent, canActivate: [AuthGuard] },
      { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
      { path: 'edit-event/:id', component: EditBookingComponent, canActivate: [AuthGuard] },
      { path: 'view-details/:id', component: ViewDetailsComponent, canActivate: [AuthGuard] },
      { path: 'new-bookin/:evnt_id', component: AddBookinComponent, canActivate: [AuthGuard] },
      { path: 'rooms', component: RoomsComponent, canActivate: [AuthGuard] },
      { path: 'register', component: SignupComponent }
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
    BookFormComponent,
    EditBookingComponent,
    ViewDetailsComponent,
    LoadingSpinnerComponent,
    AddBookinComponent,
    SignupComponent,
    CalendarComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FlashMessagesModule
  ],
  providers: [
    EventServiceService,
    BookingServiceService,
    UtilsService,
    AuthServiceService,
    AuthGuard,
    RoomsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
