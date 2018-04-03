import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingProvider {
  globalLink: any = "http://aljuberi.com/event/public/api";
  
  constructor(public http: HttpClient) {
  }

}
