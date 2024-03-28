import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/classes/Member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-members-detailes',
  templateUrl: './members-detailes.component.html',
  styleUrls: ['./members-detailes.component.css']
})
export class MembersDetailesComponent implements OnInit {
  constructor(public ms:MemberService, public router: Router){}
  ngOnInit(): void {
    debugger
    this.ms.getAllMembers().subscribe(
      succ => {
        this.ms.members=succ
        console.log(succ);
        
      },
      err => {
        console.log(err)
      }
    )
  }
  moreDetails(member:Member)
  {
    this.ms.member=member
    this.router.navigate(['פרטים נוספים'])
  } 
}