import { Component, OnInit, Input } from '@angular/core';
import { CurrentAuction, Item } from '../user';

@Component({
  selector: 'app-currentauction',
  templateUrl: './currentauction.component.html',
  styleUrls: ['./currentauction.component.css']
})

export class CurrentauctionComponent implements OnInit {

  bidErrorMessage: any;
  winningMessage: any;
  @Input() showCurrent: boolean;
  @Input() showMinimum: boolean;
  @Input() currentAuction: CurrentAuction;

  constructor() { }

  ngOnInit() {
    this.bidErrorMessage = undefined;
    this.winningMessage = undefined;
  }
}
