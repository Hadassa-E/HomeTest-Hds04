import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaccineType } from 'src/app/classes/VaccineType';
import { CityService } from 'src/app/services/city.service';
import { VaccineTypeService } from 'src/app/services/vaccine-type.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  implements OnInit {
  constructor( public router: Router,public vs:VaccineTypeService,public cs:CityService) {    
  }
  ngOnInit(): void {
    this.vs.getAllVaccineTypes().subscribe(
      succ=>{
          this.vs.allVaccineTypes=succ
      },
      err=>{console.log(err.message)}
    )
    this.cs.GetAllCities().subscribe(
      succ=>{
          this.cs.allCities=succ
          console.table(this.cs.allCities)
      },
      err=>{console.log(err.message)}
    )
    this.router.navigate(['חברי קופת חולים'])
  }
}
