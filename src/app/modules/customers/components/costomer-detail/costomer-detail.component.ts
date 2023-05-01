import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../..//shared/services/user.service';

@Component({
  selector: 'app-costomer-detail',
  templateUrl: './costomer-detail.component.html',
  styleUrls: ['./costomer-detail.component.scss']
})
export class CostomerDetailComponent implements OnInit, AfterViewInit {

  customerId: number;
  customer: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.customerId = parseInt(this.route.snapshot.params.id);
  }

  ngAfterViewInit(){
    this.userService.getCustomerDetail(this.customerId).subscribe(res =>{
      this.customer = res;
    })
  }

}
