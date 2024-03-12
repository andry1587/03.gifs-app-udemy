import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from 'src/app/gifs/pages/home-pages/home-pages.component';
import { SearchBoxComponent } from 'src/app/gifs/component/search-box/search-box.component';
import { CardListComponent } from '../component/card-list/card-list.component';
import { CardGifsComponent } from '../component/card/card-gifs/card-gifs.component';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';



@NgModule({
  declarations: [
    HomePagesComponent, 
    SearchBoxComponent,
    CardListComponent,
    CardGifsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePagesComponent,
  ]
})
export class GifsModule { }
