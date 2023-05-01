import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  
  
  inventoryLevel = [
    {id: 1, quantity: "2987", status: "inStock", label:"Item in stock" },
    {id: 2, quantity: "76", status: "lowStock", label:"Low stock"},
    {id: 3, quantity: "25", status: "outStock", label:"Out of stock"},
    {id: 4, quantity: "3088", status: "totalStock", label:"Total products"},

  ]

  constructor() { 
   
  }

  getInventory() {
    let ob = Observable.create(observer => {
      observer.next(this.inventoryLevel)
    })
    return ob;
  }


 
}

