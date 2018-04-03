import { Storage } from '@ionic/storage';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from "@angular/common/http";
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class globalInterceptor implements HttpInterceptor {
  constructor(private storage: Storage) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let access_token: any = window.localStorage.getItem('token')
    const newRequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${access_token}`
      }
    })
    
    
    return next.handle(newRequest).do(
      success => {},
      error => {
        if (error.status == '401') {
          console.error('user is unauthorized')
          this.storage.set('isLogin', false)
        }
        console.log('error message : ', error)
      }
    )
  }

}