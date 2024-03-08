import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent {

  constructor(private gifsService: GifsService) { }

  get gifs(): Gif[]{
     return this.gifsService.gifList;
  }

}
