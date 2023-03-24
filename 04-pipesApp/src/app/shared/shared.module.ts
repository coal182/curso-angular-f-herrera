import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class SharedModule {}
