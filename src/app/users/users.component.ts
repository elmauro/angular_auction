import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, Item, SelectedItem, CurrentAuction } from '../user';
import { UserService } from '../user.service';
import { CurrentauctionService } from '../currentauction.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output() outputEvent:EventEmitter<User>=new EventEmitter();

  user: User;
  inventory: Item[];

  constructor(
    private userService: UserService,
    private currentAuctionService: CurrentauctionService,
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
    this.getUser('elmauro');
  }

  ngOnInit() {
    this.initialize();
  }

  selectedItem: Item;
  
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  getUser(username: string){
    this.userService.getUser(username)
      .then(_user => {
        this.user = _user[0];
        this.inventory = [
          { name: 'breads', quantity: this.user.breads, image: 'assets/images/bread.jpg' },
          { name: 'carrots', quantity: this.user.carrots, image: 'assets/images/carrot.png' },
          { name: 'diamond', quantity: this.user.diamond, image: 'assets/images/diamond.jpg' }
        ];
        this.outputEvent.emit(this.user);
        this.currentAuctionService.getCurrentAuction();
      });
  }

  saveUser(){
    this.userService.saveUser(this.user)
      .then(user => {
        this.getUser(user.username);
      });
  }

  updateUser(){
    this.userService.updateUser(this.user)
      .then(user => {
        this.getUser(user.username);
      });
  }

  leave(){
    this.router.navigate(['/login']);
  }
}
