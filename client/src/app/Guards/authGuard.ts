import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) {}

  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.flashMessages.show('Unauthorized!! You are not currently signed in in, Kindly sign in...', {
        classes: ['alert', 'alert-warning'],
        timeout: 3000
      });
      this.router.navigate(['/']);

      return false;
    }
  }
}
