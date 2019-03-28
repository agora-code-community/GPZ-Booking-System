import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(
    public authService: AuthServiceService,
    private flashMessages: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * gets the username of local storage
   */
  getUsername() {
    this.username = localStorage.getItem('username');
    return this.username;
  }

  /**
   * Logs the user out of the system
   */
  onLogout() {
    this.authService.logout();
    // flash logout msg
    this.flashMessages.show('You have been logged out, Later!', {
      classes: ['alert', 'alert-success'],
      timeout: 3000
    });
    // redirects to home
    this.router.navigate(['/']);
    return false;
  }

}
