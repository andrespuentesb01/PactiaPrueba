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
export class productService {

  private API_TASK = `http://localhost:4100/api/product`;

  constructor(private http: HttpClient) {}

  getProduct() {
    const url = `${this.API_TASK}/getProducts`;
    return genericGet<Itask>(this.http, url);
  }

  getProductFilter(
    idDelivery: number,
    idCollect: number
  ) {
    const url = `${this.API_TASK}/getProductsFilter?idDelivery=${idDelivery}&idCollect=${idCollect}`;
    return genericGet<Itask>(this.http, url);
  }

  getProductsNewSite(
  ) {
    const url = `${this.API_TASK}/getProductsNewSite`;
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

  createProduct(
    description: string,
    price: number,
    ivaPercent: number,
    stock: number
  ): Observable<Itask> {
    const url = `${this.API_TASK}/createProduct?description=${description}&price=${price}&ivaPercent=${ivaPercent}&stock=${stock}`;
    let formData = new FormData();
 
    return genericPost<Itask>(this.http, url, formData);
  }



}
