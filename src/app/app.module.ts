import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ConsortiumComponent } from './consortium/consortium.component';
import { TeamComponent } from './team/team.component';
import { ResearchPublicationsComponent } from './research-publications/research-publications.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ConsortiumComponent,
    TeamComponent,
    ResearchPublicationsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
