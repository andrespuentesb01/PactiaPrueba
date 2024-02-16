import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retryWhen, timeout, catchError, map } from 'rxjs/operators';
import { HttpErrorHandler } from 'src/helpers/http-error-handler';
import { genericRetryStrategy } from './retry-strategy';

const errorHandler = new HttpErrorHandler();

export function genericGet<T>(
  http: HttpClient,
  url: string,
  params: {} = {}
): Observable<T> {
  return http.get<any>(url, { params }).pipe(
    retryWhen(genericRetryStrategy({ excludedStatusCodes: [422, 403, 404] })),
    catchError(errorHandler.handleError),
    map((res) => res)
  );
}

export function genericPost<T>(
  http: HttpClient,
  url: string,
  body: any,
  params: {} = {}
): Observable<T> {
  return http.post<T>(url, body, { params }).pipe(
    retryWhen(
      genericRetryStrategy({ excludedStatusCodes: [422, 403, 404, 500] })
    ),
    // timeout(10000),
    catchError(errorHandler.handleError),
    map((res) => res)
  );
}

export function genericPut<T>(
  http: HttpClient,
  url: string,
  body: any,
  params: {} = {}
): Observable<T> {
  return http.put<any>(url, body, { params }).pipe(
    retryWhen(
      genericRetryStrategy({ excludedStatusCodes: [422, 403, 404, 500] })
    ),
    catchError(errorHandler.handleError),
    map((res) => res)
  );
}

export function genericGetFile<T>(
  http: HttpClient,
  url: string,
  params: {} = {}
): Observable<Blob> {
  return http.get<Blob>(url, params).pipe(
    retryWhen(genericRetryStrategy({ excludedStatusCodes: [422, 403, 404] })),
    catchError(errorHandler.handleError),
    map((res) => res)
  );
}

export function genericPostFile<T>(
  http: HttpClient,
  url: string,
  body: any,
  params: {} = {}
): Observable<Blob> {
  return http.post<Blob>(url, body, params).pipe(
    retryWhen(
      genericRetryStrategy({ excludedStatusCodes: [422, 403, 404, 500] })
    ),
    catchError(errorHandler.handleError),
    map((res) => res)
  );
}

export function genericGetWithTimeout<T>(
  http: HttpClient,
  url: string,
  params: {} = {},
  time: number
): Observable<T> {
  return http.get<any>(url, { params }).pipe(
    retryWhen(genericRetryStrategy({ excludedStatusCodes: [422, 403, 404] })),
    timeout(time),
    catchError(errorHandler.handleError),
    map((res) => res)
  );
}
