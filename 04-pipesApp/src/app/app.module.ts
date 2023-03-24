import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';

// change app locale
import localeEs from '@angular/common/locales/es-HN';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouterModule,
    PrimeNgModule,
    SharedModule,
    SalesModule,
  ],
  declarations: [AppComponent, PipesComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'es-HN' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
