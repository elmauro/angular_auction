import { Component } from '@angular/core';
import { Item, SelectedItem, CurrentAuction } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMinimum: boolean;
  showCurrent: boolean;
  selectedItem: Item;
  currentAuction: CurrentAuction;

  title = 'Auction System';

  ngOnInit() {
  }

  onComponentChange(currentAuction: CurrentAuction){
    this.currentAuction = currentAuction;
    this.showMinimum = true;
    this.showCurrent = true;
  }
}
