import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  register(prenom:String,nom:String,email:String,password:String){
        let options={
          headers: new HttpHeaders({
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4200"
          })
        };
        let data={
          prenom:prenom,
          nom:nom,
          email:email,
          password:password

        }
        return this.httpClient.post("http://localhost:9090/register", data, options)
  }

}
