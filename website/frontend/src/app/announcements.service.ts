import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from '../../node_modules/rxjs/Observable';
import { RestApi } from './constants.js';

interface Announcement {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  picLink: string;
};

@Injectable()
export class AnnouncementsService {

  constructor(private httpClient:HttpClient) { }

  announcements = {}

  getAnnouncements() {
    return this.httpClient.get<Announcement>(RestApi.getAllAnnouncements);
  }

  deleteAnnouncement(id: number){
    return this.httpClient.delete(RestApi.deleteAnnouncement + `${id}`);
  }

  newAnnouncement(title:string, subtitle:string, link:string, picLink:string) {
    const params = new HttpParams()
    .set("title", title)
    .set("subtitle", subtitle)
    .set("link", link)
    .set("picLink", picLink);

    const httpOptions = {
      params: params
    };

    return this.httpClient.post(RestApi.createAnnouncement, params, httpOptions);
  }

}
