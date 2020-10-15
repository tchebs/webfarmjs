import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class UserService {
    
  // URL which returns list of JSON items (API end-point URL)
 // private url = 'server/database.json';

  constructor(private http: HttpClient) { }
  myurl = '127.0.0.1:5000/login/';
  getCharacters() {
    return this.http.get(`${this.myurl}/characters`);
    //return this.http.get(this.url);
  }


  
  checkKerberos(cedula:String, cedula2:String){
    return this.http.get(`station47:5000/login/${cedula}/${cedula2}`, {responseType: 'text'})
    
    
  }

  
  
}

