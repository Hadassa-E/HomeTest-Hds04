import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/classes/City';
import { Member } from 'src/app/classes/Member';
import { CityService } from 'src/app/services/city.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.css']
})
export class AddNewMemberComponent implements OnInit {
  public memberToAdd: Member = new Member()
  public memberCity: string = ""
  public IsValidIsraeliId(id: string): boolean {
    if (id.length !== 9) return false;
    for (let i = 0; i < id.length; i++) {
      if (!/^\d$/.test(id[i])) return false;
    }
    const idDigits: number[] = id.split('').map(Number);
    let sum: number = 0;
    for (let i = 0; i < idDigits.length - 1; i++) {
      let digit: number = idDigits[i];
      if (i % 2 === 0) {
        digit *= 1;
      }
      else {
        digit *= 2;
        if (digit > 9) {
          digit = Math.floor(digit / 10) + digit % 10;
        }
      }
      sum += digit;
    }
    return (sum + idDigits[idDigits.length - 1]) % 10 === 0;
  }

  pastDateValidator(date: Date) {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    if (selectedDate > currentDate)
      return false
    return true;
  }

  memberForm: FormGroup = new FormGroup({});
  constructor(public router: Router, public ms: MemberService, public cs: CityService, private formBuilder: FormBuilder) {
    this.memberForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      firstname: ['', [Validators.required, Validators.pattern('[א-ת ]*')]],
      lastname: ['', [Validators.required, Validators.pattern('[א-ת ]*')]],
      date: ['', [Validators.required]],
      street: ['', [Validators.required, Validators.pattern('[א-ת ]*')]],
      numBuilding: ['', [Validators.required, Validators.min(1)]],
      city: ['', Validators.required],
      phone: ['', [Validators.pattern('05[0-9]{8}')]],
      telephone: ['', [Validators.pattern('0[0-9]{8,9}')]]
    });
  }
  ngOnInit(): void { }
  public check() {
    if (this.memberForm.valid) {
      console.log(this.memberForm.value);
      if (!this.IsValidIsraeliId(this.memberForm.value.id))
        alert("מספר הזהות איננו תקין")
      else {
        if (this.memberForm.value.numBuilding < 1)
          alert("מספר בניין לא חוקי")
        else {
          if (!this.pastDateValidator(this.memberForm.value.date))
            alert("תאריך לידה חייב להיות תאריך מהעבר")
          else {
            this.memberToAdd.MemberId = this.memberForm.value.id
            this.memberToAdd.MemberFirstname = this.memberForm.value.firstname
            this.memberToAdd.MemberLastname = this.memberForm.value.lastname
            this.memberToAdd.MemberBirthdate = this.memberForm.value.date
            this.memberToAdd.MemberAddressStreet = this.memberForm.value.street
            this.memberToAdd.MemberAddressBuildingNumber = this.memberForm.value.numBuilding
            this.memberToAdd.MemberCityId = parseInt(this.memberForm.value.city)
            this.memberToAdd.MemberPhone = this.memberForm.value.phone
            this.memberToAdd.MemberTelephone = this.memberForm.value.telephone
            this.memberToAdd.MemberWasSick = false
            this.memberToAdd.MemberCountOfVaccines = 0
            console.log(this.memberToAdd);
            
            this.ms.addMember(this.memberToAdd).subscribe(
              succ => {
                if (succ != "0") {
                  alert("החבר נוסף בהצלחה")
                  this.ms.members.push(this.memberToAdd)
                  this.router.navigate(['/דף הבית'])
                }
                else
                  alert("התרחשה שגיאה במהלך ביצוע ההוספה...")
              },
              err => { alert(err.message) })
          }
        }
      }
    }
    else {
      alert('הטופס אינו תקין');
    }
  }
}