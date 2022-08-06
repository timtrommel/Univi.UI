import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddReportComponent } from './components/reports/add-report/add-report.component';
import { ReportsListComponent } from './components/reports/reports-list/reports-list.component';

const routes: Routes = [
  // When the path contains nothing, then return the EmployeesListComponent.
  {
    path: '',
    component: EmployeesListComponent
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
      path:'reports/overview',
      component:ReportsListComponent
    },
    {
      path:'reports/add',
      component:AddReportComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
