import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  genericGet,
  genericGetFile,
  genericPost,
  genericPut,
} from '../helpers/handle-requests';

import { Itask, Itoken } from 'src/interfaces/task.interface';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  private API_TASK = `http://localhost:4100/api/Auth`;

  constructor(private http: HttpClient) {}

  validatePassword(
   
    login: string,
    password: string
  ): Observable<Itoken> {
    const url = `${this.API_TASK}/validate`;
    const body = {
      mail: login,
      password: password
    };
    let formData = new FormData();
    formData.append('mail', login);
    formData.append('password', password);
    return genericPost<Itoken>(this.http, url, body);
  }
}
