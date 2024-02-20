import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    let opt = {
      headers: new HttpHeaders()
        .set('Content-type', 'application/json')
        .set('Access-Control-Allow-Origin', 'http://localhost:4200'),
    };
    let data = {
      email: email,
      password: password
    };
    return this.httpClient.post("http://localhost:9090/login", data, opt)
      .pipe(
        tap((data: any) => {
          this.isAuthenticatedSubject.next(true);
        })
      );
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    this.router.navigateByUrl("/login");
  }

  saveToken(data: any) {
    this.isAuthenticatedSubject.next(true);
    // Other logic for saving the token
  }
}
