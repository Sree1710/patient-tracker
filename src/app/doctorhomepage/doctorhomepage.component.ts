import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-doctorhomepage',
  templateUrl: './doctorhomepage.component.html',
  styleUrls: ['./doctorhomepage.component.css']
})
export class DoctorhomepageComponent implements OnInit {
 
  constructor(private api:PatientserviceService) { }

  ngOnInit(): void {
  }

  Dlogin() {
    // this.api.dlogin()
  }
  
}
