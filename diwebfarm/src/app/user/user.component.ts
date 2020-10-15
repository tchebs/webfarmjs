import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private cedula: string;
  private cedula2: string;
  responseStatus: number;
  name = new FormControl('');
  //login = new FormGroup({
    //name: new FormControl(''),
    //password: new FormControl(''),
  //});
  loginForm
  totalAngularPackages

  @Input()
  result$: Observable<any>;

  smartphone: any = [];
  characterz: any = [];
  
  
  constructor(private userService: UserService, private http:HttpClient){}
  /**constructor(private userService: UserService, private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      name: '',
      password: ''
    });
    
    //this.characterz = this.userService.getCharacters()
  } */

  

  ngOnInit() {
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      this.totalAngularPackages = data.total;
  })
  }

  onSubmit(logindata) {
    
    this.loginForm.reset();
    //this.http.post('http://xxx/externalapi/add', user);
  }

  clickFunction() {
    alert("clicked me!");
  }

  public posttoKeberos(cedula:String){
    return this.http.get("http://localhost:8080/getConsultarCc?cc="+cedula);

  }

  

   display(cedula:String, cedula2:string)
  {
      var x="http://localhost:5000/login/"+cedula+"/"+cedula2;
      alert(x);       
  }

   loadKes():void{
    this.userService.checkKerberos(this.cedula, this.cedula2)
  }

  
  
    

}


