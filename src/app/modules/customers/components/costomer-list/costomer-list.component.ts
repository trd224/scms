import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service'

@Component({
  selector: 'app-costomer-list',
  templateUrl: './costomer-list.component.html',
  styleUrls: ['./costomer-list.component.scss']
})
export class CostomerListComponent implements OnInit {

  customers: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCustomers().subscribe(res => {
      this.customers = res;
    })
  }

}
