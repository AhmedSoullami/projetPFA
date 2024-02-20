import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tapis } from '../model/tapis.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}

  addTapisToCart(userId: any, tapisId: any): Observable<any> {
    const body = { userId, tapisId };
    return this.http.post("http://localhost:9090/addCart", body);
  }
  getCartsByIdUser(iduser:any){
    return this.http.get<Tapis[]>("http://localhost:9090/getCart/"+iduser);
  }
  deleteCartByUserId(iduser: any): Observable<any> {
    return this.http.delete("http://localhost:9090/deleteCart/" + iduser);
  }
  removeTapisFromCart(iduser: any, tapisId: any): Observable<any> {
    return this.http.delete(`http://localhost:9090/removeTapis/${iduser}/${tapisId}`);
  }
}

