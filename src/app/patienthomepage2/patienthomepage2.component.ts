import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patienthomepage2',
  templateUrl: './patienthomepage2.component.html',
  styleUrls: ['./patienthomepage2.component.css']
})
export class Patienthomepage2Component implements OnInit {
patient={
  patientName:"",
  patientAge:"",
  patientphoneNumber:"",
  username:"",
  password:""
}
  constructor(private patientservice:PatientserviceService) { }

  ngOnInit(): void {
  }

  Pregister(){
  this.patientservice.Pregister(this.patient).subscribe((data)=>{
   
  })
  alert("Success")
}
}
