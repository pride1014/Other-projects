import { Injectable } from '@angular/core';
import { User } from '../Interface';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private baseUrl = 'http://localhost:4200';
  KEY = 'users';
  http: any;
  constructor() { }

    /**
   * 
   * @returns an array of type User
   * This function reads all of the users from localStorage, if nothing is found it'll add an initial user to the
   * localStorage key and recursively call itself again to read the users again.
   */

     /**
   * 
   * @param id {number} This id should correspond to an id in the Users arrayd ifound will be returned;
   * @returns an object of type User
   */
  getUserById(id: number): User {
    const users: User[] = JSON.parse(localStorage.getItem(this.KEY)!);
    return users.find(x => x.id === id)!;
  }

  /**
   * 
   * @param newUser {User} This object would be the new user to be added into the list of users
   * @returns void, this function has the sole responsibility to add to the list of users.
   */
  addUser(newUser: User): void {
    const users: User[] = JSON.parse(localStorage.getItem(this.KEY)!);

    if (!users) {
      localStorage.setItem(this.KEY, JSON.stringify([newUser]));
      return;
    }

    let lastId = Math.max(...users.map(x => x.id));
    newUser.id = lastId++;
    localStorage.setItem(this.KEY, JSON.stringify([...users, newUser]));
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

}
