import { SettingProvider } from './../setting/setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class OrganizerProvider {
  private URL = this.settingService.globalLink
  constructor(public http: HttpClient, private settingService: SettingProvider) {
  }


  getOrganizerDetails(organizerId) {
    return this.http.get(`${this.URL}/organizer/${organizerId}`)
  }
  follow(eventId) {
    return this.http.get(`${this.URL}/organizer/follow/${eventId}`)
  }
  unfollow(eventId) {
    return this.http.get(`${this.URL}/organizer/unfollow/${eventId}`)
  }
  followedOrganizers() {
    return this.http.get(`${this.URL}/followed_organizers`)
  }
}
