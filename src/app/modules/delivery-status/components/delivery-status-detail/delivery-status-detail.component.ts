import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeliveryStatusService } from '../../../shared/services/delivery-status.service';

@Component({
  selector: 'app-delivery-status-detail',
  templateUrl: './delivery-status-detail.component.html',
  styleUrls: ['./delivery-status-detail.component.scss']
})
export class DeliveryStatusDetailComponent implements OnInit {

  items: any;
  status: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private deliveryStatusService: DeliveryStatusService
  ) { 
    this.items = this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras.state;

    // when page refreshed
    this.status = this.route.snapshot.params.status;
  }

  ngOnInit(): void {
     // when page refreshed
    this.deliveryStatusService.getDeliveryStatusByStatus(this.status).subscribe(res=>{
      this.items = res;
    })
  }

}
