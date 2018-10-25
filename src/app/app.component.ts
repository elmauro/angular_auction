import { Component } from '@angular/core';
import { Item, SelectedItem, CurrentAuction, User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMinimum: boolean;
  showCurrent: boolean;
  selectedItem: Item;
  currentUser: User;

  title = 'Auction System';

  ngOnInit() {
  }

  onComponentChange(currentUser: User){
    this.currentUser = currentUser;
    this.showMinimum = false;
    this.showCurrent = false;
  }
}
