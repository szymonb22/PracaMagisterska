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
      email: ['', [Validators.required, Validators.email]]
    });
  }
  register() {
    this.service.registerUser(this.Form.value).subscribe(
      res => {
        console.log('added');
        this.route.navigateByUrl('\login');
      }
    )
  }

}
