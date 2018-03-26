import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingProvider {
  globalLink: any = "http://aljuberi.com/event/public/api";
  _options:any = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }
  access_token :any
  constructor(public http: HttpClient) {
  }

}
