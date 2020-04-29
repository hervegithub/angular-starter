import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilsComponent } from './appareils/appareils.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppareilsListComponent } from './appareils-list/appareils-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilsComponent,
    AuthentificationComponent,
    AppareilsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
