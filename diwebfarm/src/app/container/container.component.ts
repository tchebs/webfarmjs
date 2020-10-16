import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user.service';

import { Observable } from 'rxjs';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  private containerName: string;
  private hostnameDNS: string;
  private numofinstance: any;
  private username: string;
  private glusterfs: string;
  responsefromKubernetes: any;


  constructor(private userservice: UserService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  loadContainer()  {
    this.userservice.checkKubernetes(this.containerName, this.glusterfs, this.numofinstance, this.username )
    .subscribe(x => this.responsefromKubernetes=x)
    
    
    console.log(this.responsefromKubernetes)

    return this.responsefromKubernetes
 }

}
