import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/homepage/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeekendMatcherService } from './home/service/weekend-matcher.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeekendMatcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
