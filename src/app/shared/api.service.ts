import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed, CatImg } from './types';

const api_key = 'live_hfZEhPrX4M5lazDp8zHSoeqPvTkqufX2ZKys1Zs9AdBO3vg3axHj7TJzeX8UYd9J'
const base_url = 'https://api.thecatapi.com/v1/'

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Accept', 'application/json');
headers = headers.append('x-api-key', api_key)

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  get(): Observable<Breed[]> {
    return this._http.get<Breed[]>(`${base_url}breeds`, {headers})
  }

  getRandomCards(limit: string): Observable<CatImg[]> {
    return this._http.get<CatImg[]>(`${base_url}images/search?limit=${limit}&has_breeds=1`, {headers})
  }

  getCardsByBreed(breadsID: string, limit: string): Observable<CatImg[]> {
    return this._http.get<CatImg[]>(`${base_url}images/search?limit=${limit}&breed_ids=${breadsID}`, {headers})
  }
}
