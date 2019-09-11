import { ErrorServiceService } from './../error-service/error-service.service';
import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize, tap, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as Rx from 'rxjs';
import { LoaderService } from '../loader-service/loader.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  private isConnected = true;
  public serverStatus = new Rx.Subject();

  constructor(
    private route: Router,
    private location: Location,
    private loaderService: LoaderService,
    private snack: MatSnackBar,
    private errorService: ErrorServiceService
  ) {

  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });
    request = request.clone({});

    const started = Date.now();
    let msg;
    let ok: string;
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) =>
          (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        (error: HttpErrorResponse) => (ok = 'failed')
      ),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        this.errorService.showError(error.error.message)
        return throwError(error);
      }),

      finalize(() => {
        const elapsed = Date.now() - started;
        msg = `${request.method} "${
          request.urlWithParams
          }" ${ok} in ${elapsed} ms.`;
        this.loaderService.hide();
      })
    );
  }
}
