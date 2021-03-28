import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  private passwordControl: AbstractControl;
  Form: FormGroup;
  error: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: AuthService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required, this.comparePasswords]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.passwordControl = this.Form.controls.password;

    this.passwordControl.valueChanges.subscribe(() => {
      this.Form.controls.password2.updateValueAndValidity();
    });

  }

  get f() { return this.Form.controls; }


  getErrorEmailMessage() {
    if (this.f.email.hasError('required')) {
      return 'To pole jest wymagane';
    }

    if (this.f.email.hasError('email')) {
      return 'Podany adres email jest nie prawidłowy';
    }
  }
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
  }

  comparePasswords: ValidatorFn = (control: AbstractControl) => {
    if (this.Form) {
      if (control.errors === null || 'passwordMismatch' in control.errors) {
        if (this.passwordControl.value !== control.value) {
          return { passwordMismatch: true };
        } else {
          return null;
        }
      }
    }
  }

  register() {
    if (this.Form.valid) {
      this.service.registerUser(this.Form.value).subscribe(
        () => {
          this._snackBar.open('pomyślnie zajerejstrowano użytkownika ' + this.Form.value.username, '', {
            duration: 2500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.route.navigateByUrl('\login');
        },
        error => {
          this.error = error.message;
        }
      )
    }

  }

  login() {
    this.route.navigateByUrl('\login');
  }
}
