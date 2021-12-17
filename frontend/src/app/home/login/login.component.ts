import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: any;
  message: string = '';
  constructor(private _userService: UserService, private _router: Router) {
    this.loginData = {};
  }

  ngOnInit(): void {}
  login() {
    if (!this.loginData.email || !this.loginData.password) {
      this.message = 'failed process: incomplete data';
    } else {
      this._userService.login(this.loginData).subscribe({
        next: (v) => {
          localStorage.setItem('token', v.token);
          this._router.navigate(['/dashboard']);
        },
        error: (e) => {
          this.message = e.error.message;
        },
      });
    }
  }
}
