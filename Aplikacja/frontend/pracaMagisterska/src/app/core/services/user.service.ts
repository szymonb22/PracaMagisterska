import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id:number){
    return this.http.get<User>(`${environment.apiUrl}`+'users/'+id)
  }

  registerUser(user: User) {
    return this.http.post<User>(`${environment.apiUrl}`+'register/', user);
  }

}
