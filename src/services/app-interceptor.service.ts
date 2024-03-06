import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
  
    let request = req;
    var a = localStorage.getItem('token');
    debugger;
    if (localStorage.getItem('token')) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ localStorage.getItem('token') }`
        }
      });
    }

    return next.handle(request);
  }

}