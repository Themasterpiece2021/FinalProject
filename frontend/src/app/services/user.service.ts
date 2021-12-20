import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env: string;
  constructor(private _http: HttpClient, private _router: Router) {
    this.env = environment.APP_URL;
  }
  login(user: any) {
    return this._http.post<any>(this.env + 'user/login', user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  registerUser(user: any) {
    return this._http.post<any>(this.env + 'user/registerUser', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
