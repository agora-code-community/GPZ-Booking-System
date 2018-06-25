import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthServiceService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {
    // initiating form group and setting validation rules
    this.logForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])] // change minlenght to 6
    });
  }

  ngOnInit() {
  }

  // submission of the login form
  onSubmit(creds) {
    this.authService.login(creds).subscribe(data => {
      if (data) {

        const resp = data['success']; // store db response in temp variable

        // stores the token locally
        this.authService.storeUserData(resp.token, resp.username);
        // flash message
        this.flashMessage.show('Login was successfull...', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });
        // redirect to dashboard
        this.router.navigate(['dashboard']);
      }
    },
    err => {
      // flash error
      this.flashMessage.show(err.error.error, {
        classes: ['alert, alert-warning'],
        timeout: 3500
      });
    });
  }

}
