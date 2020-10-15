import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = '127.0.0.1:5000/login';

  constructor(private http: HttpClient) { }

  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
        // Using the POST method
    const headers =  {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/x-www-form-urlencoded'})
    };
    return this.http.post(this.URL,
    {
      'username' : 'u4',
      'password' : 12345678
    },  
     headers)
  }
}
