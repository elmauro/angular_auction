import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  initialize(){
    this.user = {
      id: '',
      username: '',
      coins: 1000,
      breads: 30,
      carrots: 20,
      diamond: 1
    };
  }

  ngOnInit() {
    this.initialize();
  }

  login(){
    this.userService.getUser(this.username)
      .then(_user => {
        if(_user[0]){
          this.router.navigate(['/dashboard']);
        }else{
          this.user.username = this.username;
          this.userService.saveUser(this.user)
            .then(_user => {
              if(_user){
                this.router.navigate(['/dashboard']);
              }
            });
        }
      });
  }
}
