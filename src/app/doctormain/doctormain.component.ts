import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-doctormain',
  templateUrl: './doctormain.component.html',
  styleUrls: ['./doctormain.component.css']
})
export class DoctormainComponent implements OnInit {

  constructor(private api:PatientserviceService) {
    api.patDetail().subscribe(
      (response=>{
       this.data2=response
    }))
   }

  ngOnInit(): void {
  }
data2:any=[]
}
