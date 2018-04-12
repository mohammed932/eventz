import { SettingProvider } from './../setting/setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MetaProvider {
  private URL = this.settingService.globalLink
  constructor(public http: HttpClient, private settingService: SettingProvider) {
  }


  getCountries(){
    return this.http.get(`${this.URL}/countries`)
  }
  getCities(countryId){
    return this.http.get(`${this.URL}/cities/${countryId}`)
  }

}
