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
export class siteService {

  private API_TASK = `http://localhost:4100/api/site`;

  constructor(private http: HttpClient) {}

  getSite() {
    const url = `${this.API_TASK}/getSite`;
    return genericGet<Itask>(this.http, url);
  }

  getSiteDetails() {
    const url = `${this.API_TASK}/getSiteDetails`;
    return genericGet<Itask>(this.http, url);
  }

  createSite(
    idDelivery: number,
    idCollect: number, 
    idCar: number,
  ): Observable<Itask> {
    const url = `${this.API_TASK}/createSite?idCar=${idCar}&idDelivery=${idDelivery}&idCollect=${idCollect}`;
    let formData = new FormData();
 
    return genericPost<Itask>(this.http, url, formData);
  }

}
