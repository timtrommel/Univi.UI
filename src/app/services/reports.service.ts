import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Report } from '../models/Report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  //Function to get a list of reports
  getAllReports():Observable<Report[]>{
   
    return this.http.get<Report[]>(this.baseApiUrl + '/api/Reports');
  }


  addReport(addReportRequest: Report): Observable<Report>
  {
    addReportRequest.id =  '00000000-0000-0000-0000-000000000000';
    addReportRequest.dateCreated = new Date().toISOString()
    addReportRequest.timeCreated = new Date().toISOString()
    addReportRequest.editOnDate = new Date().toISOString()
    addReportRequest.editOnTime = new Date().toISOString()
    addReportRequest.closedOnDate = new Date().toISOString()
    addReportRequest.closedOnTime = new Date().toISOString()
    return this.http.post<Report>(this.baseApiUrl + '/api/Reports', addReportRequest);
  }

}
