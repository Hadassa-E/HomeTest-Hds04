import { Injectable } from '@angular/core';
import { City } from '../classes/City';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  url:string='https://localhost:7109/api/City/'
  public allCities:Array<City>=new Array<City>()
  constructor(public http:HttpClient) {}
  GetAllCities():Observable<Array<City>>
  {
    return this.http.get<Array<City>>(`${this.url}GetAllCities`)
  }
  GetCityById(id:number):Observable<City>
  {
    return this.http.get<City>(`${this.url}GetCityById/${id}`)
  }

}