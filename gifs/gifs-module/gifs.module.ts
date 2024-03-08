import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from 'src/app/gifs/pages/home-pages/home-pages.component';
import { SearchBoxComponent } from 'src/app/gifs/component/search-box/search-box.component';
import { CardListComponent } from '../component/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePagesComponent, 
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePagesComponent,
  ]
})
export class GifsModule { }
