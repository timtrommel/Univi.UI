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
    buildingId: 0,
    reportNo: 0,
    closedOnDate: ' ',
    closedOnTime: ' ',
    kindOfReportId: 0,
    issuedBy: ' ',
    involvedEmployee: 0,
    dateCreated: ' ',
    timeCreated: ' ',
    editOnDate: ' ',
    editOnTime: ' ',
    editByUser: 0,
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
        this.router.navigate(['reports/reports-list']);
      },
    });
  }
}
