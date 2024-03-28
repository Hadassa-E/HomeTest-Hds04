import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VaccineType } from '../classes/VaccineType';

@Injectable({
  providedIn: 'root'
})
export class VaccineTypeService {
    url:string='https://localhost:7109/api/VaccineType/'
    public allVaccineTypes:Array<VaccineType>=new Array<VaccineType>();
    constructor(public http:HttpClient) {}
    getAllVaccineTypes():Observable<Array<VaccineType>>
    {
      return this.http.get<Array<VaccineType>>(`${this.url}GetAllVaccineTypes`)
    }
    
    
  
  }
  