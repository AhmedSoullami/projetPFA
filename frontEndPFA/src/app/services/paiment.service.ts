import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaimentService {

  constructor(private http:HttpClient) { }
  processCreditCardPayment(paymentData: any): Observable<any> {
  
    return this.http.post("http://localhost:9090/addPaiment", paymentData);
  }
}
