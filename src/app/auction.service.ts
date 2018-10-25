import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { CurrentAuction } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private url = 'http://localhost:8090';  
  private socket = io.connect(this.url);

  constructor() { }

  startAuction(currentAuction: CurrentAuction){
    this.socket.emit('Auction', currentAuction);
  };
}
