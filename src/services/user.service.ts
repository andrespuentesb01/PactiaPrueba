import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  genericGet,
  genericGetFile,
  genericPost,
  genericPut,
} from '../helpers/handle-requests';

import { Itask } from 'src/interfaces/task.interface';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class userService {

  private API_TASK = `http://localhost:4100/api/user`;

  constructor(private http: HttpClient) {}

  getUsers() {
    const url = `${this.API_TASK}/getUsers`;
    return genericGet<Itask>(this.http, url);
  }


  createUser(
    name: string,
    password: string
  ): Observable<Itask> {
    const url = `${this.API_TASK}/createUser?name=${name}&password=${password}`;
    let formData = new FormData();
 
    return genericPost<Itask>(this.http, url, formData);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.API_TASK}/deleteUser?id=${id}`;
    return this.http.delete<any>(url);
  }

  updateUser(id: number, name: string): Observable<any> {
    const url = `${this.API_TASK}/updateUser?id=${id}&name=${name}`;
    return genericPut<any>(this.http, url, null);
  }

}
