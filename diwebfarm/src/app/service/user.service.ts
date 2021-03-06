import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    console.log('before request')   
   
    var temp = this.http.get<string>(`http://station47:5000/login/${cedula}/${cedula2}`)
    
    
    console.log('after request')   
    
    return temp
    
  }

  checkKubernetes(containerName:string, numofinstance:any, username:string, glusterfs:string){
    console.log('before Container req')
    
    const body = {app_name: containerName, instance_count: numofinstance, gfs_path: glusterfs, user_name: username};
    console.log(body)

    let body1 = new HttpParams();
    body1 = body1.set('app_name', containerName);
    body1 = body1.set('instance_count', numofinstance);
    body1 = body1.set('gfs_path', glusterfs);
    body1 = body1.set('user_name', username);


    var temp = this.http.post(`http://station51:4444/api/deploy_site`, body1)

    console.log('after Container req')

    return temp
  }

  getExistingContainers() {
    var temp = this.http.get(`http://station51:4444/api/list_sites/aidan`)

    console.log('after history req')

    return temp
  }

  
  
}

