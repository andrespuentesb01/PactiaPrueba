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
export class carService {

  private API_TASK = `http://localhost:4100/api/car`;

  constructor(private http: HttpClient) {}

  getCar() {
    const url = `${this.API_TASK}/getCars`;
    return genericGet<Itask>(this.http, url);
  }

  getCarFilter(
    idDelivery: number,
    idCollect: number
  ) {
    const url = `${this.API_TASK}/getCarsFilter?idDelivery=${idDelivery}&idCollect=${idCollect}`;
    return genericGet<Itask>(this.http, url);
  }

  getCarsNewSite(
  ) {
    const url = `${this.API_TASK}/getCarsNewSite`;
    return genericGet<Itask>(this.http, url);
  }

  updateTask(
   
    id: number,
    status: string
  ): Observable<Itask> {
    const url = `${this.API_TASK}/updateTask?id=${id}&status=${status}`;
    let formData = new FormData();
 
    return genericPost<Itask>(this.http, url, formData);
  }

  createCar(
    plate: string,
    branch: string,
    year: string,
    model: string
  ): Observable<Itask> {
    const url = `${this.API_TASK}/createCar?plate=${plate}&branch=${branch}&year=${year}&model=${model}`;
    let formData = new FormData();
 
    return genericPost<Itask>(this.http, url, formData);
  }

  deleteTask(
   
    id: number
  ): Observable<Itask> {
    const url = `${this.API_TASK}/deleteTask?id=${id}`;
    let formData = new FormData();

   
     var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJBUEBHTUFJTC5DT00iLCJuYmYiOjE3MDgxMDk4MjYsImV4cCI6MTcwODExMDEyNiwiaWF0IjoxNzA4MTA5ODI2fQ.DwCy0Up0GA-B8hm52jYZFv11PCd95vb8Lr6VZdqnTH0';
    let parametros = new HttpParams();
    const opciones = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJBUEBHTUFJTC5DT00iLCJuYmYiOjE3MDgxMDk4MjYsImV4cCI6MTcwODExMDEyNiwiaWF0IjoxNzA4MTA5ODI2fQ.DwCy0Up0GA-B8hm52jYZFv11PCd95vb8Lr6VZdqnTH0'
      }),
      params: parametros
    };
    debugger;
    return genericPost<Itask>(this.http, url+'/'+token, opciones);
  }

}
