import { SettingProvider } from './../setting/setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {
  private URL: any;
  constructor(public http: HttpClient, private settingService: SettingProvider) {
    this.URL = this.settingService.globalLink
  }

  login(params) {
    console.log(params);
    let data = new FormData()
    data.append('username', params.username)
    data.append('password', params.password)
    // console.log('form data : ',data.getAll('username'));
    return this.http.post(`${this.URL}/login`, data)
  }

  register(params) {
    console.log(params);
    let data = new FormData()
    data.append('username', params.username)
    data.append('email', params.email)
    data.append('password', params.password)
    return this.http.post(`${this.URL}/register`, data)
  }


  logout() {
    return this.http.get(`${this.URL}/logout`)
  }
}
