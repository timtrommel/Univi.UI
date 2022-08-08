import { Component, OnInit } from '@angular/core';
import { Report } from '../../../models/Report.model';
import { ReportsService } from '../../../services/reports.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
reports: Report[]=[
 
  
];


  constructor(private reportsService : ReportsService, public DatePipe: DatePipe) { }

  ngOnInit(): void {
    this.reportsService.getAllReports()
    .subscribe({
      next: (reports:any) => {
        
        this.reports = reports;
      },
      error: (response:any) =>
      {
        console.group(response);
      }
    })
  }

}
