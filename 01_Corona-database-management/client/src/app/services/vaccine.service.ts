import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaccine } from '../classes/Vaccine';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  url:string='https://localhost:7109/api/Vaccine/'

  constructor(public http:HttpClient) {}
  getAllVaccinesForMember(id:string):Observable<Array<Vaccine>>
  {
    return this.http.get<Array<Vaccine>>(`${this.url}GetAllVaccinesToMember/${id}`)
  }
  AddVaccine(vaccine:Vaccine):Observable<number>
  {
    return this.http.post<number>(`${this.url}AddVaccine`,vaccine)
  }
  DeleteVaccine(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>(`${this.url}DeleteVaccine/${id}`)
  }
}
