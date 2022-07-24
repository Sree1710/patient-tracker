import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorhomepageComponent } from './doctorhomepage/doctorhomepage.component';
import { Doctorhomepage2Component } from './doctorhomepage2/doctorhomepage2.component';
import { HomeComponent } from './home/home.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';
import { Patienthomepage2Component } from './patienthomepage2/patienthomepage2.component';

const routes: Routes = [{path:" ",component:HomeComponent},{path:'d',component:DoctorhomepageComponent},{path:'doctor',component:Doctorhomepage2Component},{path:'p',component:PatienthomepageComponent},{path:'patient',component:Patienthomepage2Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
