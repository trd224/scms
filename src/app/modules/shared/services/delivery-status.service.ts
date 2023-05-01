import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryStatusService {

  
  
  deliveryStatus = [
    {id: 1, customerName: "Leanne Graham", status: "packed"},
    {id: 2, customerName: "Ervin Howell", status: "shipped"},
    {id: 3, customerName: "Clementine Bauch", status: 'delivered'},
    {id: 4, customerName: "Patricia Lebsack", status: "failed"},
    {id: 5, customerName: "Chelsey Dietrich", status: "canceled"},
    {id: 6, customerName: "Mrs. Dennis Schulist", status: "packed"},
    {id: 7, customerName: "Kurtis Weissnat",status: "shipped"},
    {id: 8, customerName: "Nicholas Runolfsdottir V", status: 'delivered'},
    {id: 9, customerName: "Glenna Reichert", status: "failed"},
    {id: 10, customerName: "Clementina DuBuque", status: "canceled"},
    {id: 11, customerName: "Leanne Graham2", status: "packed"},
    {id: 12, customerName: "Ervin Howell2", status: "packed"},
    {id: 13, customerName: "Clementine Bauch2", status: 'shipped'},
    {id: 14, customerName: "Patricia Lebsack2", status: "shipped"},
    {id: 15, customerName: "Chelsey Dietrich2", status: "packed"},
    {id: 16, customerName: "Mrs. Dennis Schulist2", status: "packed"},
    {id: 17, customerName: "Kurtis Weissnat2",status: "shipped"},
    {id: 18, customerName: "Nicholas Runolfsdottir V2", status: 'shipped'},
    {id: 19, customerName: "Glenna Reichert2", status: "packed"},
    {id: 20, customerName: "Clementina DuBuque2", status: "delivered"},
    
  ]

  constructor() { 
   
  }

  getDeliveryStatus() {
    let ob = Observable.create(observer => {
      observer.next(this.deliveryStatus)
    })
    return ob;
  }

  getDeliveryStatusByStatus(status: string){
    let ob = Observable.create(observer => {

      let data = this.deliveryStatus.filter((res) => {
        return res.status == status
      })
      observer.next(data)
    })
    return ob;
  }

 
}
