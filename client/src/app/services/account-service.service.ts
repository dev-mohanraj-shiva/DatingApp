import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../Model/User';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private http = inject(HttpClient);
  baseUrl:string = "http://localhost:5185/api/"
  currentUser  = signal<User|null>(null);

  Login(model:any)
  {
     return this.http.post<User>(this.baseUrl + 'account/login',model).pipe
     (
        map(user =>{
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUser.set(user);
        })
     )
  }
  logout()
  {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
