import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifsList: Gif[] = [];

  private apiKey = 'Q5FL7D9AkERHCQD8hBGrrPvI3BZ5twnI';
  private _tagsHistory: string[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase().trim();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  searchTag(tag: string) {
    if (!tag.trim()) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);
    this.http
      .get<SearchResponse>('https://api.giphy.com/v1/gifs/search', {
        params,
      })
      .subscribe((resp) => {
        console.log(resp);
        this.gifsList = resp.data;
      });
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }
  private loadLocalStorage() {
    let a = localStorage.getItem('history');
    if (!a) return;
    let parsed = JSON.parse(a) as Array<string>;
    if (parsed.length == 0) return;
    this._tagsHistory = parsed;
    this.searchTag(parsed[0]);
  }
}
