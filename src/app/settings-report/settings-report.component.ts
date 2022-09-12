import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Building } from '../models/building.model';
import { ReportsService } from '../services/reports.service';

@Component({
  selector: 'app-settings-report',
  templateUrl: './settings-report.component.html',
  styleUrls: ['./settings-report.component.css']
})
export class SettingsReportComponent implements OnInit {

addBuildingRequest: Building ={
  id: ' ',
  name: ''
};
buildings: Building[]=[

];


  constructor(private reportService: ReportsService, private router: Router) { }

  ngOnInit(): void {
      this.reportService.getAllBuildings()
      .subscribe(
        {
          next:(buildings:any)=> {
           this.buildings= buildings;
        },
        error: (response:any)=>
        {
          console.group(response);
        }
    })
  }

  
addBuilding(){
  this.reportService.addBuilding(this.addBuildingRequest)
  .subscribe(
    {
      next:(building) => {
        this.router.navigate(['settings-reports']);
      }
    }
  )
}


}
