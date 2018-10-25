import { Component, OnInit, Input } from '@angular/core';
import { CurrentAuction, Item, Winner, User } from '../user';
import { CurrentauctionService } from '../currentauction.service';

@Component({
  selector: 'app-currentauction',
  templateUrl: './currentauction.component.html',
  styleUrls: ['./currentauction.component.css']
})

export class CurrentauctionComponent implements OnInit {

  bidErrorMessage: string;
  winningMessage: string;
  updateCounter;
  updateCurrentAuction;
  updateWinner;
  setWinner;
  clearMessage;

  @Input() showCurrent: boolean;
  @Input() showMinimum: boolean;
  @Input() currentUser: User;

  currentAuction: any;
  winner: any;
  bid: number = 0;

  constructor(
    private currentAuctionService: CurrentauctionService,
  ) { }

  ngOnInit() {
    this.bidErrorMessage = undefined;
    this.winningMessage = undefined;

    this.updateCounter = this.currentAuctionService.updateCounter().subscribe(counter => {
      let count;
      if(this.currentAuction){
        count = Number(counter);
        this.currentAuction.time = count;

        if (count === 0) {
          if (!this.winner) {
            this.winner = undefined;
            ////this.currentAuction = undefined;
            this.showCurrent = false;
            this.showMinimum = false;
          }          
        }
      }
    });

    this.updateCurrentAuction = this.currentAuctionService.updateCurrentAuction().subscribe(currentAuction => {
      this.showCurrent = true;
      this.showMinimum = true;
      this.currentAuction = currentAuction;
    });
    
    this.updateWinner = this.currentAuctionService.updateBid().subscribe(winner => {
      this.showMinimum = false;
      this.winner = winner;
      this.currentAuction.winBid = this.winner.bid;
    });

    this.setWinner = this.currentAuctionService.setWinner().subscribe(winner => {
      this.winner = new Winner();
      this.winner = winner;
      this.bid = 0;
      this.showCurrent = false;
      this.showMinimum = false;

      if (this.winner.winner) {
        if (this.currentUser.id === this.currentAuction.seller.id) {
          //updateSeller();
        }

        if (this.currentUser.id === this.winner.id) {
          //$scope.updateUser();
        }

        this.winningMessage = `Winning bid ${this.winner.bid} by ${this.winner.winner.username}`;
        let counter = 10;
        const WinnerCountdown = setInterval(() => {
          counter--;

          if (counter === -1) {
            this.currentAuctionService.clearWinningMessage();
            clearInterval(WinnerCountdown);
          }
        }, 1000);
      }
    });

    this.clearMessage = this.currentAuctionService.clearMessage().subscribe(winner => {
      this.currentAuction = undefined;
      this.winner = undefined;
      this.winningMessage = undefined;
    });
  }

  placeBid(){
    this.winner = new Winner();
    this.winner.bid = this.bid;
    this.winner.winner = this.currentUser;
    this.currentAuctionService.placeBid(this.winner);
  }
}
