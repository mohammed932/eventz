import { SettingProvider } from './../setting/setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TicketsProvider {
  private URL = this.settingService.globalLink

  constructor(public http: HttpClient, private settingService: SettingProvider) {

  }


  getEventTickets(eventId){
    return this.http.get(`${this.URL}/event/tickets/${eventId}`)
  }

  getFreeTickets(){
    return this.http.get(`${this.URL}/event/free_tickets`)
  }

  getMyTickets(){
    return this.http.get(`${this.URL}/user/tickets`)
  }

}
