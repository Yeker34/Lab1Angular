import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Client error: ${error.error.message}`;
        } else {
          errorMessage = `Server error: ${error.status} - ${error.message}`;
        }
        
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  };