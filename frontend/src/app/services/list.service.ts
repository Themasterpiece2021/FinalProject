import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private env: string;
  constructor(private _http: HttpClient , private _router: Router) {
    this.env = environment.APP_URL;
   }
   listList(_id: string){
    return this._http.get<any>(this.env + 'list/listList/'+ _id);
   }
  

   
   saveList(idProyecto: any,list: any){
    return this._http.post<any>(this.env + 'list/saveList/'+idProyecto, list);
   }
   
   deleteList(list: any) {
    return this._http.delete<any>(this.env + 'list/deleteList/' + list._id);
  }

  

}
