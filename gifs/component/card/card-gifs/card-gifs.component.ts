import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'card-gifs',
  templateUrl: './card-gifs.component.html'
})
export class CardGifsComponent implements OnInit {

   @Input()  
   public gif! : Gif;

  constructor() { }

  ngOnInit(): void {
     if( !this.gif ) throw new Error('Esta propiedad Gif es requerida');
  }

}
