import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Report} from '../../models/report.model';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



constructor() { }

ngOnInit(): void {
  
}

}
