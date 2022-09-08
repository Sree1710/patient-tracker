import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorhomepageComponent } from './doctorhomepage/doctorhomepage.component';
import { Doctorhomepage2Component } from './doctorhomepage2/doctorhomepage2.component';
import { DoctormainComponent } from './doctormain/doctormain.component';
import { DoctorportalComponent } from './doctorportal/doctorportal.component';
import { HomeComponent } from './home/home.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';
import { Patienthomepage2Component } from './patienthomepage2/patienthomepage2.component';
import { PatientmainComponent } from './patientmain/patientmain.component';
import { PatientportalComponent } from './patientportal/patientportal.component';
import { PortableComponent } from './portable/portable.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:'p',component:PatientportalComponent},
{path:'d',component:DoctorportalComponent},
{path:'pl',component:PatienthomepageComponent},
{path:'pr',component:Patienthomepage2Component},
{path:'dl',component:DoctorhomepageComponent},
{path:'dr',component:Doctorhomepage2Component},
{path:'dp',component:PortableComponent},
{path:'pm',component:PatientmainComponent},
{path:'dm',component:DoctormainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
