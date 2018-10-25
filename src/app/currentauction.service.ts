import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { CurrentAuction, Winner } from './user';

@Injectable({
  providedIn: 'root'
})
export class CurrentauctionService {

  private url = 'http://localhost:8090';  
  private socket = io.connect(this.url);

  constructor() { }

  placeBid(winner: Winner){
    this.socket.emit('placeBid', winner);
  }

  clearWinningMessage(){
    this.socket.emit('clearWinningMessage');
  }

  updateCounter() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('counter', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  } 

  updateCurrentAuction(){
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('currentAuction', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }

  updateBid(){
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('currentBid', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }

  setWinner(){
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('winner', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }

  clearMessage(){
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('clearMessage', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }
}
