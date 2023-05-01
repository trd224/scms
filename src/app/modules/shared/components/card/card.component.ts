import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: any;
  @Input() cls: string;
  count: number;
  constructor() { }

  ngOnInit(): void {
    this.count = this.data && (this.data.length || this.data.quantity); 
  }

}
