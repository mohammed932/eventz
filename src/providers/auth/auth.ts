import { SettingProvider } from './../setting/setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {
  private URL = this.settingService.globalLink
  constructor(public http: HttpClient, private settingService: SettingProvider) {
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

  getUserProfile() {
    return this.http.get(`${this.URL}/profile`)
  }

  forgetPassword(email) {
    let data = new FormData()
    data.append('email', email)
    return this.http.post(`${this.URL}/forgot_password`, data)
  }
  resetPassword(params) {
    let data = new FormData()
    data.append('email', params.email)
    data.append('code', params.code)
    data.append('password', params.password)
    return this.http.post(`${this.URL}/reset_password`, data)
  }

  refreshToken() {
    this.http.get(`${this.URL}/refresh_token`)
  }
}
