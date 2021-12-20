import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;
  constructor(private _userService: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar ) {
    this.loginData = {};
  }

  ngOnInit(): void {}
  login() {
    if (!this.loginData.email || !this.loginData.password) {
      this.message = 'failed process: incomplete data';
      this.openSnackBarError();
    } else {
      
      this._userService.login(this.loginData).subscribe({
        next: (v) => {
          localStorage.setItem('token', v.token);
          this._router.navigate(['/dashboard/listProyect']);
        },
        error: (e) => {
          console.log(e);
          this.message = e.error.message;
          this.openSnackBarError();
        },
      });
    }
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: 'style-snackbarFalse',
    });
  }


}
