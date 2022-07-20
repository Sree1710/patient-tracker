import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorhomepageComponent } from './doctorhomepage/doctorhomepage.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorhomepageComponent,
    PatienthomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
