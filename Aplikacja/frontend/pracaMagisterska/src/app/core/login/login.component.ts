import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: AuthService
  ) { }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
  }

  
  get f() { return this.Form.controls; }

  getErrorMessage() {
    if (this.f.username.hasError('required')) {
      return 'To pole jest wymagane';
    }
    if (this.f.password.hasError('required')) {
      return 'To pole jest wymagane';
    }
  }

  login() {
    if(this.Form.valid){
      this.service.loginUser(this.Form.value).subscribe(
        res => {
          console.log('logged in');
          this.route.navigateByUrl('main');
        }
      )
    }
  }
  
  register() {
    this.route.navigateByUrl('register');
  }

}
