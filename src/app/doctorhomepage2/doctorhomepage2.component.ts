import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-doctorhomepage2',
  templateUrl: './doctorhomepage2.component.html',
  styleUrls: ['./doctorhomepage2.component.css']
})
export class Doctorhomepage2Component implements OnInit {
 doctor={
  doctorName:"",
  registrationNumber:"",
  doctorDepartment:"",
  userName:"",
  passWord:""
 }
  constructor(private patientservice:PatientserviceService) { }

  ngOnInit(): void {
    
    console.log(this.doctor);
  }
  
  
Dregister()
{
  this.patientservice.Dregister(this.doctor).subscribe((data)=>{
   alert("Success")
  })
  
}
}
