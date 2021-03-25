import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
      password2: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
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
    if (this.f.password2.hasError('required')) {
      return 'To pole jest wymagane';
    }
    if (this.f.first_name.hasError('required')) {
      return 'To pole jest wymagane';
    }
    if (this.f.last_name.hasError('required')) {
      return 'To pole jest wymagane';
    }
    if (this.f.email.hasError('pattern')) {
      return 'Podany adres email jest nie prawidłowy';
    }
    if (this.f.email.hasError('required')) {
      return 'To pole jest wymagane';
    }

  }

  register() {
    if(this.Form.valid){
      this.service.registerUser(this.Form.value).subscribe(
        res => {
          console.log('added');
          this.route.navigateByUrl('\login');
        },
        err=>{
          console.log(err);
        }
      )
    }

  }

  login(){
    this.route.navigateByUrl('\login');
  }
}
