import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vaccine } from 'src/app/classes/Vaccine';
import { MemberService } from 'src/app/services/member.service';
import { VaccineTypeService } from 'src/app/services/vaccine-type.service';
import { VaccineService } from 'src/app/services/vaccine.service';

@Component({
  selector: 'app-add-vaccine',
  templateUrl: './add-vaccine.component.html',
  styleUrls: ['./add-vaccine.component.css']
})
export class AddVaccineComponent implements OnInit{
  public vaccineToAdd: Vaccine = new Vaccine()
  vtForm: FormGroup = new FormGroup({});
  pastDateValidator(date: Date) {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    if (selectedDate > currentDate)
      return false
    return true;
  }
  constructor(public router: Router, public ms: MemberService, public vs:VaccineService,public vts:VaccineTypeService, private formBuilder: FormBuilder) {
    this.vtForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      vaccineType: ['', Validators.required],
    });
  }
  ngOnInit(): void { }
  public check() {
    if (this.vtForm.valid) {
      console.log(this.vtForm.value);
      if (!this.pastDateValidator(this.vtForm.value.date))
            alert("תאריך ביצוע החיסון חייב להיות תאריך מהעבר")
          else {
            debugger
            this.vaccineToAdd.VaccineDate = this.vtForm.value.date
            this.vaccineToAdd.VaccineVaccineTypeId =parseInt(this.vtForm.value.vaccineType)
            this.vaccineToAdd.VaccineMemberId = this.ms.member.MemberId
            console.log(this.vaccineToAdd);
            this.vs.AddVaccine(this.vaccineToAdd).subscribe(
              succ => {
                if (succ != 0) {
                  alert("החיסון נוסף בהצלחה")
                  this.ms.members.find(x=>x.MemberId==this.ms.member.MemberId)!.MemberCountOfVaccines!++;
                  this.router.navigate(['/דף הבית'])
                }
                else
                  alert("התרחשה שגיאה במהלך ביצוע ההוספה...")
              },
              err => { alert(err.message) })
    }
  }
    else {
      alert('הטופס אינו תקין');
    }
  }
}

