import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { RestApi } from './constants.js';

interface tnmInfo {
  id: number;
  date: string;
  topic: string;
  download: string;
};

@Injectable()
export class TnmService {

  constructor(private httpClient:HttpClient) { }

  getTnm() {
    return this.httpClient.get<tnmInfo>(RestApi.getAllMinistryNights)
  }

  deleteTnm(id: number) {
    return this.httpClient.delete(RestApi.deleteMinistryNight + `${id}`);
  }

  newTnm(date:string, topic:string, download:string) {
    const params = new HttpParams()
    .set("date", date)
    .set("topic", topic)
    .set("download", download);

    const httpOptions = {
      params: params
    };

    return this.httpClient.post(RestApi.createMinistryNight, params, httpOptions);
  }

}
