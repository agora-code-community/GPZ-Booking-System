import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpFm: FormGroup;
  showSpinner = false;

  // error variables
  usernameErr = false;
  emailErr = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private flashMessages: FlashMessagesService,
    private router: Router
  ) {
    // initializing the form and setting up validation rules
    this.signUpFm = fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]*')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      c_password: ['', Validators.compose([Validators.required, this.equalto('password')])]
    });
  }

  ngOnInit() {
  }

   /**
   * Validator function for comparing password and c_password fields
   * @param field_name is the field being compared
   */
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const input = control.value;
      const isValid = control.root.value[field_name] === input;
      if (!isValid) {
          return {'equalTo': {isValid}};
      } else {
        return null;
      }
    };
  }

  /**
   * Resets the password fields of the form in cases of mistakes or server errors,
   * but this should rarely be called because validation is synced with the API requirements
   */
  resetForm() {
    this.signUpFm.reset({password: '', c_password: ''});
  }

  /**
   * Submits the form to the API and creates a new user
   */
  onSubmit(user) {
    this.authService.register(user).subscribe(
      data => {
        if (data) {
          this.flashMessages.show('New user has been created successfully, kindly sign in.', {
            classes: ['alert, alert-success'],
            timeout: 3000
          });

          this.showSpinner = false;  // don't show loader

          this.router.navigateByUrl('/');
        } else {
          this.showSpinner = true;
        }
      },
      err => {
        err = err.error.error; // diasy chain to get to the error

        // check if the username error from the server is present
        if (err.username) {
          this.usernameErr = true;
        }
        // checks whether the email error from the server is present
        if (err.email) {
          this.emailErr = true;
        }

        this.flashMessages.show('Oops! An error occurred, please try again.', {
          classes: ['alert, alert-warning'],
          timeout: 3000
        });

        // console.log(err);
        this.resetForm();
      }
    );
  }

}
