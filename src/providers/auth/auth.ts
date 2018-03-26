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
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }
    return this.http.post(`${this.URL}/login`, JSON.stringify(params), _options )
  }

  register(params){
    console.log(params);
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }
    return this.http.post(`${this.URL}/register`, JSON.stringify(params), _options )
  }
}
