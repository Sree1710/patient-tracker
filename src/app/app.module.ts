import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorhomepageComponent } from './doctorhomepage/doctorhomepage.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { Patienthomepage2Component } from './patienthomepage2/patienthomepage2.component';
import { Doctorhomepage2Component } from './doctorhomepage2/doctorhomepage2.component';
import { PatientportalComponent } from './patientportal/patientportal.component';
import { DoctorportalComponent } from './doctorportal/doctorportal.component';
import { PortableComponent } from './portable/portable.component';
import { DoctormainComponent } from './doctormain/doctormain.component';
import { PatientmainComponent } from './patientmain/patientmain.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorhomepageComponent,
    PatienthomepageComponent,
    NavbarComponent,
    Patienthomepage2Component,
    Doctorhomepage2Component,
    PatientportalComponent,
    DoctorportalComponent,
    PortableComponent,
    DoctormainComponent,
    PatientmainComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
