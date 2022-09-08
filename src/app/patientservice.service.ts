import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http:HttpClient) { }
  dregister(data:any){
    return this.http.post<any>('http://localhost:3200/dr',data)
  }
  pregister(dataa:any){
    return this.http.post<any>('http://localhost:3200/pr',dataa)
  }
  docDetail=()=>
  {
    return this.http.get('http://localhost:3200/docDetail')
  }
  patDetail=()=>
  {
    return this.http.get('http://localhost:3200/patDetail')
  }
}
