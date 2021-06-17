import { Component, Input } from '@angular/core';
/*import { FilmesService } from '../services/filmes.service';
import { Fase1 } from './tab1.model';*/

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public slidesOptions: any = {slidesPerView: 3, freeMode: true, spaceBetween: 10}

    constructor() { }
}