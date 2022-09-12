import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Building } from '../models/building.model';
import { KindOfReport } from '../models/kindOfReport.model';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
//#region baseURL
  baseApiUrl: string = environment.baseApiUrl; //Base url
  constructor(private http: HttpClient) { }
  //#endregion

  //#region httpGetReport
 //Function to get a list of reports
 getAllReports():Observable<Report[]>{
   
  return this.http.get<Report[]>(this.baseApiUrl + '/api/Reports');
}

getLatest5():Observable<Report[]>{ //Get the lastest 5 reports on the dashboard page
   
  return this.http.get<Report[]>(this.baseApiUrl + '/api/Reports/GetLatest5');
} 

getReport(id: string): Observable<Report>{ // Get the details from a specific report
  return  this.http.get<Report>(this.baseApiUrl + '/api/Reports/' + id);
 }

addReport(addReportRequest: Report): Observable<Report> //Add a new report from the report menu
{
  addReportRequest.id =  '00000000-0000-0000-0000-000000000000';
  return this.http.post<Report>(this.baseApiUrl + '/api/Reports', addReportRequest);
}
  //#endregion
  
 //#region httpPutReport

 //Update/edit the choosen report
 updateReport(id: string, updateReportRequest: Report): 
 Observable<Report>{
   return  this.http.put<Report>(this.baseApiUrl + '/api/Reports/' + id, 
   updateReportRequest);
  }
 //#endregion

//#region httpGetBuildings

    //Function to get a list of reports
    getAllBuildings():Observable<Building[]>{
   
      return this.http.get<Building[]>(this.baseApiUrl + '/api/Buildings');
    }
//#endregion

//#region httpPostBuildings
addBuilding(addBuildingRequest: Building): Observable<Building> //Add a building from the settings menu
   {
     addBuildingRequest.id =  '00000000-0000-0000-0000-000000000000';
     return this.http.post<Building>(this.baseApiUrl + '/api/Reports/AddBuilding', addBuildingRequest);
   }
//#endregion

//#region httpPostKindOfReport
addkindOfReport(addkindOfReportRequest: KindOfReport): Observable<KindOfReport> //Add a kind of report from the settings menu
{
 addkindOfReportRequest.id =  '00000000-0000-0000-0000-000000000000';
  return this.http.post<Building>(this.baseApiUrl + '/api/Reports/AddKindOfReport', addkindOfReportRequest);
}
//#endregion
   

 

}
