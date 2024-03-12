import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared-module/shared.module';
import { GifsModule } from './gifs/gifs-module/gifs.module';


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    GifsModule
  ],

  declarations: [
    AppComponent    
  ],  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
