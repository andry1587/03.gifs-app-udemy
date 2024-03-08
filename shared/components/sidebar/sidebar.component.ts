import { Component, ElementRef } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public taginputSiderbar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService : GifsService) { }

 get tags() {
    return this.gifsService.tagsHistory;
 }

 searchTagSidebar(tag:string):void{  
  this.gifsService.searchTagFind(tag);
}

}
