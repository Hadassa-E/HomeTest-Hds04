import { Injectable } from '@angular/core';
import { CoronaInfection } from '../classes/CoronaInfection';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaInfectionService {
  url:string='https://localhost:7109/api/CoronaInfection/'
  public coronaInflectionForMember:CoronaInfection=new CoronaInfection();
    constructor(public http:HttpClient) {}
    GetCoronaInfectionByIdToMember(id:string):Observable<CoronaInfection>
    {
      return this.http.get<CoronaInfection>(`${this.url}GetCoronaInfectionByIdToMember/${id}`)
    }
    AddCoronaInfection(coronaInfection:CoronaInfection):Observable<number>
    {
      return this.http.post<number>(`${this.url}AddCoronaInfection`,coronaInfection)
    }
    DeleteCoronaInfection(id:number):Observable<boolean>
    {
      return this.http.delete<boolean>(`${this.url}DeleteCoronaInfection/${id}`)
    }
  }