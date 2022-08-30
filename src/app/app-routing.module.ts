import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddReportComponent } from './components/reports/add-report/add-report.component';
import { ReportDetailsComponent } from './components/reports/report-details/report-details.component';
import { ReportsListComponent } from './components/reports/reports-list/reports-list.component';

const routes: Routes = [
  // When the path contains nothing, then return the EmployeesListComponent.
  {
    path: '',
    component: DashboardComponent
  },
    {
      path:'employees',
      component: EmployeesListComponent
    },
    {
      path:'employees/add',
      component: AddEmployeeComponent
    },
    {
      path:'employees/edit/:id',
      component:EditEmployeeComponent
    },
    {
      path:'reports/reportsList',
      component:ReportsListComponent
    },
    {
      path:'reports/add',
      component:AddReportComponent
    },
    {
      path:'reports/details/:id',
      component:ReportDetailsComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
