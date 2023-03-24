import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { NonCommonComponent } from './pages/non-common/non-common.component';
import { SortingComponent } from './pages/sorting/sorting.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { FliesPipe } from './pipes/flies.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [
    NumbersComponent,
    BasicsComponent,
    NonCommonComponent,
    SortingComponent,
    CustomUppercasePipe,
    FliesPipe,
    SortPipe,
  ],
})
export class SalesModule {}
