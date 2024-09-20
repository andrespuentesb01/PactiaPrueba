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
import { IBuy } from 'src/app/interfaces/shop.interface';

@Injectable({
  providedIn: 'root'
})
export class shopService {

  private API_TASK = `http://localhost:4100/api/order`;

  constructor(private http: HttpClient) {}

  getShop() {
    const url = `${this.API_TASK}/getShop`;
    return genericGet<Itask>(this.http, url);
  }

  getShopHeader() {
    const url = `${this.API_TASK}/getOrderHeader`;
    return genericGet<Itask>(this.http, url);
  }

  getShopDetails(
    id: number
  ) {
    const url = `${this.API_TASK}/getOrderDetails?id=${id}`;
    return genericGet<Itask>(this.http, url);
  }


  createShop(body: IBuy[]): Observable<IBuy> {
    
    let formData = new FormData();
    const url = `${this.API_TASK}/createOrder`;
  
  debugger;
    return genericPost<IBuy>(
      this.http,
      url,
      body
    );
  }



}
