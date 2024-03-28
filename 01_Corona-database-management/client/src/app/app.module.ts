import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersDetailesComponent } from './components/members-detailes/members-detailes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoreDetailesForMemberComponent } from './components/more-detailes-for-member/more-detailes-for-member.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddNewMemberComponent } from './components/add-new-member/add-new-member.component';
import { UpdateMeberComponent } from './components/update-meber/update-meber.component';
import { AddCoronaInfectionComponent } from './components/add-corona-infection/add-corona-infection.component';
import { AddVaccineComponent } from './components/add-vaccine/add-vaccine.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersDetailesComponent,
    MoreDetailesForMemberComponent,
    HomePageComponent,
    AddNewMemberComponent,
    UpdateMeberComponent,
    AddCoronaInfectionComponent,
    AddVaccineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
