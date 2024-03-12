import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  public loadImage : boolean = false;

  @Input()
  public urlLazy!: string;

  @Input()
  public textoAlternativo: string = '';

  constructor() { }

  ngOnInit(): void {
    if ( !this.urlLazy ) throw new Error('URL property is required');
  
  }

  onLoad() : void{
    setTimeout(() => {
      console.log('Image Load');
      this.loadImage = true;
    }, 1000);   
  }

}
