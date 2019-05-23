import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{

  constructor(private authService: AuthService){}
  message: string = '';
  success: string = '';

  ngOnInit(){

  }
  onSignUp(form){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password)
      .then(
        (response) => {
          if(response){
            this.success = 'Registration Succesful!!';
          }
        }
      )
      .catch(
        error => {
          this.message = error.message;
        }
      )
  }

}
