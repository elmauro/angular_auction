import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, Item, SelectedItem, CurrentAuction } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output() outputEvent:EventEmitter<CurrentAuction>=new EventEmitter();

  user: User = {
    username: 'elmauro',
    coins: 1000,
    breads: 30,
    carrots: 20,
    diamond: 1
  };

  inventory: Item[] = [
    { name: 'breads', quantity: this.user.breads, image: 'assets/images/bread.jpg' },
    { name: 'carrots', quantity: this.user.carrots, image: 'assets/images/carrot.png' },
    { name: 'diamond', quantity: this.user.diamond, image: 'assets/images/diamond.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectedItem: Item;
  
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  onComponentChange(currentAuction: CurrentAuction){
    this.outputEvent.emit(currentAuction);
  }
}
