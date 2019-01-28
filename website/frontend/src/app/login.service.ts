import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

interface User {
  username:string;
  password:string;
}

@Injectable()
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(username:string) {
    const params = new HttpParams()
    .set("username", username)

    return this.httpClient.get<User>('https://catamuadmin.azurewebsites.net/users', {params:params})
  }

}
