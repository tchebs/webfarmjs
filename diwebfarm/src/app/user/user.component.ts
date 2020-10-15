import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  result$: Observable<any>;

  constructor(private userService: UserService) { 
    this.result$ = userService.resolveItems();
  }

  ngOnInit() {
  }

  

}


