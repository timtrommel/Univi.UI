import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { AddReportComponent } from './components/reports/add-report/add-report.component';
import { ReportsListComponent } from './components/reports/reports-list/reports-list.component';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { ReportDetailsComponent } from './components/reports/report-details/report-details.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AddReportComponent,
    ReportsListComponent,
    DashboardComponent,
    ReportDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
