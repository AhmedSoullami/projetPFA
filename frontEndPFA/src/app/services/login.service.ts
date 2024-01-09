import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  login(email:String,password:String){
    let opt={
      headers: new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200'),
    };
    let data={
      email:email,
      password:password
    };
    return this.httpClient.post("http://localhost:9090/login",data,opt);
  }
}
