import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http:HttpClient) { }
  Dregister(doctor:any){
    return this.http.post<any>("http://localhost:3200/dr",doctor)
  }
  Pregister(patient:any){
    return this.http.post<any>("http://localhost:3200/pr",patient)
  }
}
