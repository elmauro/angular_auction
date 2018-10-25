import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item, User, CurrentAuction } from '../user';
import { AuctionService } from '../auction.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  @Input() selectedItem: Item;
  @Input() user: User;

  errorMessage: any;
  qtyAuction: number = 0;
  minBidAuction: number = 0;

  constructor(
    private auctionService: AuctionService,
  ) { }

  ngOnInit() {
    this.errorMessage = undefined;
  }

  startAuction(){
    let currentAuction = new CurrentAuction();
    currentAuction.name = this.selectedItem.name;
    currentAuction.quantity = this.qtyAuction;
    currentAuction.image = this.selectedItem.image;
    currentAuction.minBid = this.minBidAuction;
    currentAuction.seller = this.user;
    currentAuction.time = 60;
    currentAuction.winBid = 100;

    this.qtyAuction = 0;
    this.minBidAuction = 0;
    this.auctionService.startAuction(currentAuction);
  }
}
