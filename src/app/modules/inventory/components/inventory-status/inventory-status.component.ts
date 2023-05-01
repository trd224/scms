import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../shared/services/inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-status',
  templateUrl: './inventory-status.component.html',
  styleUrls: ['./inventory-status.component.scss']
})
export class InventoryStatusComponent implements OnInit {

  data: any;
  
  constructor(
    private inventoryService: InventoryService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(res => {
      this.data = res;
    })
  }

}

