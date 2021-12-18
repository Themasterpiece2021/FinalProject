import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private env: string;
  constructor(private _http: HttpClient , private _router: Router) {
    this.env = environment.APP_URL;
  }
  listTask(_id: string){
    return this._http.get<any>(this.env + 'task/listTask/'+ _id);
   }
}
