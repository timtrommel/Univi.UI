import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/models/Report.model';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

  ReportDetails: Report = {
    id: ' ',
    building: '',
    reportNo: 0,
    closedOnDate: new Date(),
    kindOfReport: '',
    issuedBy: ' ',
    involvedEmployee: '',
    dateCreated: new Date(),
    editOnDate: new Date(),
    editByUser: '',
    title: ' ',
    description: ' ',
    isActive: true,
    closeReport: false,
    actionNeeded: false,
    reportByEmployeeOrVisitor: '',
  };

  constructor(private route: ActivatedRoute, private ReportsService : ReportsService ,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
  next: (params) => {
    const id = params.get('id');
  
  if(id){
    this.ReportsService.getReport(id)
    .subscribe({
      next: (response) => {
        this.ReportDetails = response;
      }
    })
  }
  }
    });
  }

}
