import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  showMenu: boolean = false;

  constructor() { }

  toggleMenu(){
    this.showMenu = !this.showMenu
  }
}
