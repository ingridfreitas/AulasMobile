import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public slideOptons: any = {slidesPerView: 3, freeMode: true, spaceBetween: 10 }

  constructor() {}

}
