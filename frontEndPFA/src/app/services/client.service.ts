import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }
  clients(){
    return this.httpClient.get("http://localhost:9090/users")
  }
  deleteUser(userId: number){
        return this.httpClient.delete(`http://localhost:9090/users/${userId}`)    
  }
  getCountUser(){
    return this.httpClient.get("http://localhost:9090/userCount")
  }
}
