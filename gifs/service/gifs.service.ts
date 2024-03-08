import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Console } from 'console';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY = 'api.giphy.com/v1/gifs/search?api_key=YcPR95U4ZMaLxHpk8D6KVlWh4OUL1DIo&q=valorant&limit=10';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor( private http: HttpClient) { 
    this.loadLocalStorage();
  }

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];

  private apiKey:       string = 'YcPR95U4ZMaLxHpk8D6KVlWh4OUL1DIo';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';
            

  
  private organizedHistory(tag :string){
      tag.toLowerCase();

      if(this._tagsHistory.includes(tag)){
        this._tagsHistory = this.tagsHistory.filter( (oldTag) => oldTag !== tag);
      }
      this._tagsHistory.unshift(tag);
      this._tagsHistory =this.tagsHistory.splice(0,10);
      this.saveLocalStorage();
  }

  searchTagFind( tag: string) :void{
    if(tag.length===0) return;

    this.organizedHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey )
      .set('limit', '10' )
      .set('q', tag )

    //this.http.get<SearchResponse>('https://api.giphy.com/v1/gifs/search?api_key=YcPR95U4ZMaLxHpk8D6KVlWh4OUL1DIo&q=valorant&limit=10')
    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
              .subscribe(resp => {                 
                this.gifList = resp.data;
                console.log( {gifs: this.gifList});
              } );
  }

  //----------guardar en el storage de chrome----------
  private saveLocalStorage():void{
      localStorage.setItem('historyGifs', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void{
    if(!localStorage.getItem('historyGifs')) return;
    
    this._tagsHistory = JSON.parse(localStorage.getItem('historyGifs')! );

    if (this._tagsHistory.length === 0) return;
      this.searchTagFind(this._tagsHistory[0]);
   
  }


  get tagsHistory() {
    return [...this._tagsHistory];
  }

}
