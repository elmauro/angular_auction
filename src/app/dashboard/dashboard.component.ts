import { Component, OnInit } from '@angular/core';
import { Item, SelectedItem, CurrentAuction, User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showMinimum: boolean;
  showCurrent: boolean;
  selectedItem: Item;
  currentUser: User;

  constructor() { }

  ngOnInit() {
  }

  onComponentChange(currentUser: User){
    this.currentUser = currentUser;
    this.showMinimum = false;
    this.showCurrent = false;
  }
}
