import { publishFacade } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoronaInfection } from 'src/app/classes/CoronaInfection';
import { Vaccine } from 'src/app/classes/Vaccine';
import { CityService } from 'src/app/services/city.service';
import { CoronaInfectionService } from 'src/app/services/corona-infection.service';
import { MemberService } from 'src/app/services/member.service';
import { VaccineTypeService } from 'src/app/services/vaccine-type.service';
import { VaccineService } from 'src/app/services/vaccine.service';

@Component({
  selector: 'app-more-detailes-for-member',
  templateUrl: './more-detailes-for-member.component.html',
  styleUrls: ['./more-detailes-for-member.component.css']
})
export class MoreDetailesForMemberComponent implements OnInit {
  constructor( public router: Router,public ms: MemberService, public cs: CityService, public vs: VaccineService,public vts:VaccineTypeService,public cis:CoronaInfectionService) { }
  public cityName: string = ""
  public vaccinesForMember: Array<Vaccine> = new Array<Vaccine>()//חיסוני החבר
  public coronaInfectionForMember:CoronaInfection=new CoronaInfection()//חולי בקורונה
  ngOnInit(): void {
    this.cs.GetCityById(this.ms.member.MemberCityId!).subscribe(
      succ => {
        this.cityName = succ.CityName!
      },
      err => { console.log(err.message) }
    )
    if (this.ms.member.MemberCountOfVaccines != 0) {
      this.vs.getAllVaccinesForMember(this.ms.member.MemberId!).subscribe(
        succ => {
          debugger
          this.vaccinesForMember = succ
          this.vaccinesForMember.forEach(x=>{
            x.VaccineVaccineTypeName = this.vts.allVaccineTypes.find(y => y.VaccineTypeId == x.VaccineVaccineTypeId)?.VaccineTypeManufacturer;
          })
        console.table(this.vaccinesForMember)
        },
        err => {console.log(err.message) }
      )
    }
    if(this.ms.member.MemberWasSick) {
      this.cis.GetCoronaInfectionByIdToMember(this.ms.member.MemberId!).subscribe(
        succ => {
          debugger
          this.coronaInfectionForMember = succ
          console.table(this.coronaInfectionForMember);
          
        },
        err => { console.log(err.message) }
      )
    }
  }
  public DeleteMember(){
    const confirmation = confirm("האם אתה בטוח שברצונך למחוק את החבר? פעולה זו אינה ניתנת לביטול.");
    if (confirmation) {
      this.ms.DeleteMember(this.ms.member.MemberId!).subscribe(
        succ => {
          if (succ) {
            alert("החבר הוסר בהצלחה")
            const index = this.ms.members.indexOf(this.ms.member);
            if (index !== -1) 
            this.ms.members.splice(index, 1);
            this.router.navigate(['דף הבית'])

          }
          else
            alert("התרחשה שגיאה במהלך ביצוע ההסרה...")
        },
        err => { alert(err.message) })
    }
}
public NevigateToUpdateMember()
{
  this.router.navigate(["/עדכון פרטי משתמש"])
}
public NevigateToCoronaInfection()
{
  this.router.navigate(['/הוספת חולי בקורונה'])

}
public NevigateToVaccine()
{
  this.router.navigate(['/הוספת חיסון'])

}

  }
