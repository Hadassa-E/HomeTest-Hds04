import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/classes/Member';
import { CityService } from 'src/app/services/city.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-update-meber',
  templateUrl: './update-meber.component.html',
  styleUrls: ['./update-meber.component.css']
})
export class UpdateMeberComponent implements OnInit{
  memberForm: FormGroup = new FormGroup({});
  constructor(public router: Router, public ms: MemberService, public cs: CityService, private formBuilder: FormBuilder) {
    this.memberForm = this.formBuilder.group({
      firstname: [this.ms.member.MemberFirstname, [Validators.required, Validators.pattern('[א-ת ]*')]],
      lastname: [this.ms.member.MemberLastname, [Validators.required, Validators.pattern('[א-ת ]*')]],
      date: [this.ms.member.MemberBirthdate, [Validators.required]],
      street: [this.ms.member.MemberAddressStreet, [Validators.required, Validators.pattern('[א-ת ]*')]],
      numBuilding: [this.ms.member.MemberAddressBuildingNumber, [Validators.required, Validators.min(1)]],
      city: [this.ms.member.MemberCityId, Validators.required],
      phone: [this.ms.member.MemberPhone, [Validators.pattern('05[0-9]{8}')]],
      telephone: [this.ms.member.MemberTelephone, [Validators.pattern('0[0-9]{8,9}')]]
    });
  }
  public lastMember:Member=new Member()
  pastDateValidator(date: Date) {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    if (selectedDate > currentDate)
      return false
    return true;
  }
  ngOnInit(): void {console.log(this.ms.member); }
  public check() {
    if (this.memberForm.valid) {
      console.log(this.memberForm.value);
        if (this.memberForm.value.numBuilding < 1)
          alert("מספר בניין לא חוקי")
        else {
          if (!this.pastDateValidator(this.memberForm.value.date))
            alert("תאריך לידה חייב להיות תאריך מהעבר")
          else {
            this.ms.member.MemberFirstname = this.memberForm.value.firstname
            this.ms.member.MemberLastname = this.memberForm.value.lastname
            this.ms.member.MemberBirthdate = this.memberForm.value.date
            this.ms.member.MemberAddressStreet = this.memberForm.value.street
            this.ms.member.MemberAddressBuildingNumber = this.memberForm.value.numBuilding
            this.ms.member.MemberCityId = parseInt(this.memberForm.value.city)
            this.ms.member.MemberPhone = this.memberForm.value.phone
            this.ms.member.MemberTelephone = this.memberForm.value.telephone
            console.log(this.ms.member);
            
            this.ms.UpdateMember(this.ms.member).subscribe(
              succ => {
                if (succ) {
                  alert("החבר עודכן בהצלחה")
                  this.lastMember!=this.ms.members.find(x=>x.MemberId==this.ms.member.MemberId)
                  this.ms.members.splice(this.ms.members.indexOf(this.lastMember), 1);
                  this.ms.members.push(this.ms.member)
                }
                else
                  alert("התרחשה שגיאה במהלך ביצוע ההוספה...")
              },
              err => { alert(err.message) })
          }
        }
      }
    else {
      alert('הטופס אינו תקין');
    }
  }
}
