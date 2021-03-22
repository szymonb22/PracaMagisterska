import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  readonly ApiUrl = " http://127.0.0.1:8000/";

  constructor(private http: HttpClient,
              private route:Router) { }

  registerUser(user: User) {
    return this.http.post<User>(this.ApiUrl + 'users/', user);
  }

  ////////////TO Do login User
  loginUser(user: User) {
    return this.http.post<User>(this.ApiUrl + 'auth/', user).pipe(
      map(user => {
        if (user && user.token) {
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
      })
    )
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.route.navigateByUrl('login');    
  }

}
