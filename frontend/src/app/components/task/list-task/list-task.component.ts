import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../services/task.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  list: any;
  taskData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;
  constructor(
    private _taskService: TaskService,
    private _snackBar: MatSnackBar
  ) {
    this.taskData={};
    this.list=localStorage.getItem('list');
   }

  ngOnInit(): void {
    /*this._taskService.listTask(this.list).subscribe({
      next: (v) => {
        this.taskData = v.taskList;
      },
      error: (e) => {
        this.message = e.error.message;
        this.openSnackBarError();
      },
    });*/
  }
  openSnackBarSuccesFull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: 'style-snackbarTrue',
    });
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
