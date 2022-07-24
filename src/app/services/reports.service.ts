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
}