import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item, CurrentAuction } from '../user';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  @Input() selectedItem: Item;
  errorMessage: any;
  @Output() outputEvent:EventEmitter<CurrentAuction>=new EventEmitter();
  qtyAuction: number = 0;
  minBidAuction: number = 0;

  constructor() { }

  ngOnInit() {
    this.errorMessage = undefined;
  }

  startAuction(){
    let currentAuction = new CurrentAuction();
    currentAuction.name = this.selectedItem.name;
    currentAuction.quantity = this.qtyAuction;
    currentAuction.image = this.selectedItem.image;
    currentAuction.minBid = this.minBidAuction;
    currentAuction.seller = "elmauro";
    currentAuction.time = 90;
    currentAuction.winBid = 100;

    this.outputEvent.emit(currentAuction);
  }
}
