import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersDetailesComponent } from './components/members-detailes/members-detailes.component';
import { MoreDetailesForMemberComponent } from './components/more-detailes-for-member/more-detailes-for-member.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddNewMemberComponent } from './components/add-new-member/add-new-member.component';
import { UpdateMeberComponent } from './components/update-meber/update-meber.component';
import { AddCoronaInfectionComponent } from './components/add-corona-infection/add-corona-infection.component';
import { AddVaccineComponent } from './components/add-vaccine/add-vaccine.component';

const routes: Routes = [
  {path:'דף הבית', component:HomePageComponent},
  {path:'הוספת חבר חדש', component:AddNewMemberComponent},
{path:'חברי קופת חולים', component:MembersDetailesComponent},
{path:'פרטים נוספים', component:MoreDetailesForMemberComponent},
{path:'עדכון פרטי משתמש', component:UpdateMeberComponent},
{path:'הוספת חולי בקורונה', component:AddCoronaInfectionComponent},
{path:'הוספת חיסון', component:AddVaccineComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
