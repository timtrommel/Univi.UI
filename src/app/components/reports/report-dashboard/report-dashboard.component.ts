import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../services/reports.service';
import { DatePipe } from '@angular/common';
import { Report } from '../../../models/report.model';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css']
})
export class ReportDashboardComponent implements OnInit {

  constructor(private reportsService : ReportsService, public DatePipe: DatePipe) { }
  reports:Report[]=[

  ];
  ngOnInit(): void {
    this.reportsService.getLatest5()
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
