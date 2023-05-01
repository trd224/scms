import { Component, OnInit } from '@angular/core';
//import { ODataDateBase } from '@odata/client';
import { DataServiceService } from '../../services/data-service.service';
import { CommonService } from '../../modules/shared/services/common.service';
//import { map } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  menuList:any

  extraData = [
    {name:'Delivery Status', link:"delivery-status"},
    {name:'Inventory Status', link:"inventory-status"},
    {name:'Shipment', link:"shipment"},
  ];
  
  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute,
    public commonService: CommonService
  ) {
    
  }

  ngOnInit(): void {
    this.dataService.getODataXmlData().subscribe((res)=>{
      this.menuList = res['value'];
    })
  }

  menuToggle(){
    this.commonService.toggleMenu();
  }

}
