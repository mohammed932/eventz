import { AuthProvider } from './../auth/auth';
import { SettingProvider } from './../setting/setting';
import { Storage } from '@ionic/storage';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpClient
} from "@angular/common/http";
import { Injectable, NgModule ,Injector} from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class globalInterceptor implements HttpInterceptor {
  constructor(private storage: Storage ,
    private injector: Injector
    ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let access_token: any = window.localStorage.getItem('token')
    const newRequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${access_token}`,
      }
    })
    
    
    return next.handle(newRequest).do(
      success => {},
      error => {
        if (error.status == '401' || error.status === 403) {
          console.error('user is unauthorized')
          // this.http.get(`${this.URL}/refresh_token`).subscribe( data => {
          //   window.localStorage.setItem('token', data['token'])
          // })
          let x = this.injector.get(AuthProvider).refreshToken()
          console.log("my x : ",x);
          
          this.storage.set('isLogin', false)
        }
        console.log('error message : ', error)
      }
    )
  }

}