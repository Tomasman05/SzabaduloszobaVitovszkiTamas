import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FoglalasokComponent } from './foglalasok/foglalasok.component';
import { UjFoglalasComponent } from './uj-foglalas/uj-foglalas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoglalasokComponent,
    UjFoglalasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
