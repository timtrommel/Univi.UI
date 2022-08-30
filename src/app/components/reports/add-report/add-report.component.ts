import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../../../models/Report.model';
import { ReportsService } from '../../../services/reports.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css'],
})
export class AddReportComponent implements OnInit {
  currentDate = new Date();
  addReportRequest: Report = {
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
  constructor(private ReportService: ReportsService, private router: Router) {}

  ngOnInit(): void {}

  addReport() {
    this.ReportService.addReport(this.addReportRequest).subscribe({
      next: (employee) => {
        this.router.navigate(['reports/reportsList']);
      },
    });
  }
}
