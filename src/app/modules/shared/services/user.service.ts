import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getCustomerDetail(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
