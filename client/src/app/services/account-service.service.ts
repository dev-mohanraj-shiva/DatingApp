import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private http = inject(HttpClient);
  baseUrl:string = "http://localhost:/api/"

  Login(model:any)
  {
     return this.http.post(this.baseUrl + 'account/login',model);
  }
}
