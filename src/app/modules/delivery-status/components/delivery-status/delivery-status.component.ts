import { Component, OnInit } from '@angular/core';
import { DeliveryStatusService } from '../../../shared/services/delivery-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-status',
  templateUrl: './delivery-status.component.html',
  styleUrls: ['./delivery-status.component.scss']
})
export class DeliveryStatusComponent implements OnInit {

  data: any;

  packeddata:any;
  shippeddata:any;
  delivereddata:any;
  faileddata:any;
  canceleddata:any;
  constructor(
    private deliveryStatusService: DeliveryStatusService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.deliveryStatusService.getDeliveryStatus().subscribe(res => {
      this.data = res;

      this.packeddata = this.data.filter((res)=>{
        return res.status == 'packed';
      })
      this.shippeddata = this.data.filter((res)=>{
        return res.status == 'shipped';
      })
      this.delivereddata = this.data.filter((res)=>{
        return res.status == 'delivered';
      })
      this.faileddata = this.data.filter((res)=>{
        return res.status == 'failed';
      })
      this.canceleddata = this.data.filter((res)=>{
        return res.status == 'canceled';
      })
    })
  }

  openOrder(status: string, data:any){
    this.router.navigate([`/delivery-status/${status}`],{
      state: data
    })
  }

}
