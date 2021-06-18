import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public slideOptons: any = {slidesPerView: 3, freeMode: true, spaceBetween: 10 }
  constructor() {}

}
