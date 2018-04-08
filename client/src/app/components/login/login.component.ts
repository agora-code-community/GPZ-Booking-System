import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) {
    // initiating form group
    this.logForm = formBuilder.group({
      email: ['', Validators.compose( [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]*')] )],
      password: ['', Validators.compose([Validators.minLength(3), Validators.required])] // change minlenght to 6
    });
  }

  ngOnInit() {
  }

  // submission of the login form
  onSubmit() {
    console.log(this.logForm.value);
  }

}
