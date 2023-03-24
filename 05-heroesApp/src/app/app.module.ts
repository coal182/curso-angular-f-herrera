import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, ErrorPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
