import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [CardComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
