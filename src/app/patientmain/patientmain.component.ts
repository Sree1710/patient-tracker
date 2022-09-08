import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patientmain',
  templateUrl: './patientmain.component.html',
  styleUrls: ['./patientmain.component.css']
})
export class PatientmainComponent implements OnInit {

  constructor(private api:PatientserviceService) 
  {
    api.docDetail().subscribe(
      (response=>{
       this.data=response
    }))
   }

  ngOnInit(): void {
  }
data:any=[]
}
