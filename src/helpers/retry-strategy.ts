import { Observable, throwError, timer } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';

export const genericRetryStrategy = ({
  // maxRetryAttempts = 3,
  maxRetryAttempts = 0,
  scalingDuration = 500,
  excludedStatusCodes = [],
}: {
  maxRetryAttempts?: number;
  scalingDuration?: number;
  excludedStatusCodes?: number[];
} = {}) => {
  return (errors: Observable<HttpErrorResponse>) => {
    return errors.pipe(
      mergeMap((error, i) => {
        const retryAttempt = ++i;

        // if maximum number of retries have been met
        // or response is a status code we don't wish to retry, throw error
        if (
          retryAttempt > maxRetryAttempts ||
          excludedStatusCodes.find((e) => e === error.status)
        ) {
          return throwError(error);
        }

        // retry after 0.5s, 1s, etc...
        return timer(retryAttempt * scalingDuration);
      })
    );
  };
};
