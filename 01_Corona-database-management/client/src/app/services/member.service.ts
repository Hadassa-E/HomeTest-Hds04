import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../classes/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  url:string='https://localhost:7109/api/Member/'
public member:Member=new Member();
public members: Array<Member>=new Array<Member>() 
  constructor(public http:HttpClient) {}
  getAllMembers():Observable<Array<Member>>
  {
    return this.http.get<Array<Member>>(`${this.url}GetAllMembers`)
  }
  addMember(member:Member):Observable<string>
  {
    return this.http.post<string>(`${this.url}AddMember`,member)
  }
  DeleteMember(id:string):Observable<boolean>
  {
    return this.http.delete<boolean>(`${this.url}DeleteMember/${id}`)
  }
  UpdateMember(member:Member):Observable<boolean>
  {
    return this.http.put<boolean>(`${this.url}UpdateMember`,member);
  }
}
