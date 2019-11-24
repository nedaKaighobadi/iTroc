import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
private url:string=environment.apiUrl;
  constructor(private http: HttpClient) { 
  }
  creationHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html'
    })
  }
  getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }
  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getLogin(user): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'DoNotIntercept': ''
      })
    };
    return this.http.post<any>(this.url+"/login",user,header);
  }
  getLogout(): Observable<any> {
    return this.http.get<any>(environment.apiUrl+'/logout', this.creationHeader)
  }
  register( user):Observable<any>{
    return this.http.post<any>(this.url+"/register",user);
  }
}
