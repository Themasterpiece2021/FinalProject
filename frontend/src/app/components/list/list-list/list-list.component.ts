import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ListService} from '../../../services/list.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})
export class ListListComponent implements OnInit {
  listId: any;
  listData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;
  idProyecto: any
  constructor(private rutaActiva: ActivatedRoute,private _listService: ListService,
    private _snackBar: MatSnackBar) {
this.listData={};
   }

  ngOnInit(): void {
    this.idProyecto= this.rutaActiva.snapshot.params["_id"];
    this._listService.listList(this.idProyecto).subscribe({
      next: (v) => {
        this.listData = v.listaList;
      },
      error: (e) => {
        this.message = e.error.message;
        this.openSnackBarError();
      },
    });
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
    /*getId(_id: any){
      this.listId=_id;
      localStorage.setItem('list',this.listId ) 
    }*/
  }


