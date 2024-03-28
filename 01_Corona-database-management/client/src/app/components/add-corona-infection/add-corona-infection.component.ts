import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoronaInfection } from 'src/app/classes/CoronaInfection';
import { CoronaInfectionService } from 'src/app/services/corona-infection.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-add-corona-infection',
  templateUrl: './add-corona-infection.component.html',
  styleUrls: ['./add-corona-infection.component.css']
})
export class AddCoronaInfectionComponent implements OnInit {
  public coronaInfectionToAdd: CoronaInfection = new CoronaInfection()
  ciForm: FormGroup = new FormGroup({});
  DatesValidator(fromdate: Date,todate:Date) {
    if (fromdate > todate)
      return false
    return true;
  }
  constructor(public router: Router, public ms: MemberService, public cis:CoronaInfectionService, private formBuilder: FormBuilder) {
    this.ciForm = this.formBuilder.group({
      todate: ['', [Validators.required]],
      fromdate: ['', Validators.required],
    });
  }
  ngOnInit(): void { }
  public check() {
    if (this.ciForm.valid) {
      console.log(this.ciForm.value);
      if (!this.DatesValidator(this.ciForm.value.fromdate,this.ciForm.value.todate))
            alert("תאריך ההחלמה חייב להיות אחרי מועד קבלת תוצאה חיובית")
          else {
            debugger
            this.coronaInfectionToAdd.CoronaInfectionFromDate = this.ciForm.value.fromdate
            this.coronaInfectionToAdd.CoronaInfectionToDate =this.ciForm.value.todate
            this.coronaInfectionToAdd.CoronaInfectionMemberId = this.ms.member.MemberId
            console.log(this.coronaInfectionToAdd);
            this.cis.AddCoronaInfection(this.coronaInfectionToAdd).subscribe(
              succ => {
                if (succ != 0) {
                  alert("נוסף בהצלחה")
                  this.ms.members.find(x=>x.MemberId==this.ms.member.MemberId)!.MemberWasSick=true;
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

