import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  loginUser(user:User) {
    return this.http.post<any>(`${environment.apiUrl}${environment.jwtLogin}`, user)
      .pipe(
        map(response => {
          let currentUser: User;
          if (response.access) {
            currentUser = jwt_decode(response.access)
            currentUser.token = response.access
            currentUser.refreshToken = response.refresh
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            this.currentUserSubject.next(currentUser);
          }
          return currentUser;
        }),
      )
    // .subscribe( data => console.log('data'), error => console.log('error'))
  }

  registerUser(user: User) {
    return this.http.post<User>(`${environment.apiUrl}`+'register/', user);
  }
  
  refreshToken() {
    console.log('this.currentUserValue.refreshToken')
    console.log(this.currentUserValue.refreshToken)
    const refreshToken = this.currentUserValue.refreshToken
    return this.http.post<any>(`${environment.apiUrl}${environment.jwtRefresh}`, { 'refresh': refreshToken })
      .pipe(
        map(response => {
          console.log('refresh')
          console.log(response)
          let currentUser: User;
          if (response.access) {
            currentUser = jwt_decode(response.access)
            currentUser.token = response.access
            currentUser.refreshToken = response.refresh
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            console.log(currentUser)
            this.currentUserSubject.next(currentUser);
          }
          return currentUser;
        }),
      )
    // .subscribe( data => console.log('data'), error => console.warn(error))
  }

  getUserById(id){
    return this.http.get<User>(`${environment.apiUrl}`+'users/'+id)
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
