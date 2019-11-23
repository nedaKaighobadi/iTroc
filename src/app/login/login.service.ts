import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  constructor(private http: HttpClient) { 
  }
  creationHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html'
    })
  }

 
}
