import { NgModule } from "@angular/core";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FilterPipe } from "../pipes/instPipe";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ConsortiumComponent } from "./consortium/consortium.component";
import { TeamComponent } from "./team/team.component";
import { ResearchPublicationsComponent } from "./research-publications/research-publications.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FooterComponent } from "./footer/footer.component";
import { NewsComponent } from "./news/news.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ConsortiumComponent,
    TeamComponent,
    ResearchPublicationsComponent,
    ContactComponent,
    PageNotFoundComponent,
    FooterComponent,
    NewsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
