import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInpunt')
  public taginput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag(){
    const newTag = this.taginput.nativeElement.value;

    this.gifsService.searchTagFind(newTag);

    this.taginput.nativeElement.value = '';

    console.log({newTag});
  }




}
