import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8090';
  private userPath = '/api/users/username/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getUser(username: string): Promise<User> {
    return this.http.get(this.url + this.userPath + username)
      .toPromise()
        .then(res => res.json() as User);  
  }

  saveUser(user: User): Promise<User> {
    return this.http
        .post('/api/users', JSON.stringify(User), {headers: this.headers})
        .toPromise()
        .then(() => user);
  }

  updateUser(user: User): Promise<User> {
    return this.http
      	.put('/api/users/' + user.id, JSON.stringify(user), {headers: this.headers})
      	.toPromise()
      	.then(() => user);
  }
}
