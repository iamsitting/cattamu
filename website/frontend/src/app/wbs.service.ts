import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { RestApi } from './constants.js';

interface wbsInfo {
  id: number;
  date: string;
  location: string;
  topic: string;
  download: string;
};

@Injectable()
export class WbsService {

  constructor(private httpClient:HttpClient) { }

  getWbs() {
    return this.httpClient.get<wbsInfo>(RestApi.getAllBibleStudies);
  }

  deleteWbs(id: number) {
    return this.httpClient.delete(RestApi.deleteBibleStudy + `${id}`);
  }

  newWbs(date:string, location:string, topic:string, download:string) {
    const params = new HttpParams()
    .set("date", date)
    .set("location", location)
    .set("topic", topic)
    .set("download", download);

    const httpOptions = {
      params: params
    };

    return this.httpClient.post(RestApi.createBibleStudy, params, httpOptions);
  }
}
