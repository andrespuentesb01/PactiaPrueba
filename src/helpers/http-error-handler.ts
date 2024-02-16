import { ErrorHandler } from '@angular/core';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class HttpErrorHandler implements ErrorHandler {
  handleError(httpError: HttpErrorResponse): Observable<never> {
    console.error(httpError);

    if (httpError instanceof TimeoutError) {
      return throwError('Time out.');
    }

    const { status = 0 } = httpError;
    let error = httpError.error;

    if (typeof error === 'string') {
      try {
        error = JSON.parse(error);
      } catch (e) {
        return throwError(error);
      }
    }

    return throwError(error);
  }
}
