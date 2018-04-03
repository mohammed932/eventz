import { SettingProvider } from './../setting/setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventsProvider {
  private URL = this.settingService.globalLink
  
  formdata = new FormData()
  constructor(public http: HttpClient, private settingService: SettingProvider) {
  }


  getEvents(params) {
    console.log("oooa : ",params);
    
    this.formdata.append('type_id',params.type_id)
    return this.http.post(`${this.URL}/events`, this.formdata)
  }
  getEventDetails(eventId){
    return this.http.get(`${this.URL}/event/${eventId}`)
  }
  like(eventId) {
    return this.http.get(`${this.URL}/event/like/${eventId}`)
  }
  dislike(eventId) {
    return this.http.get(`${this.URL}/event/dislike/${eventId}`)
  }
  wish(eventId) {
    return this.http.get(`${this.URL}/event/wish/${eventId}`)
  }
  unwish(eventId) {
    return this.http.get(`${this.URL}/event/unwish/${eventId}`)
  }
  
  getLikedEvents(){
    return this.http.get(`${this.URL}/liked_events`)
  }

  getEventsType(){
    return this.http.get(`${this.URL}/types`)
  }

  getWishingEvents(){
    return this.http.get(`${this.URL}/wishing_events`)
  }

}
