import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NonCommonComponent } from './sales/pages/non-common/non-common.component';
import { SortingComponent } from './sales/pages/sorting/sorting.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'non-common',
    component: NonCommonComponent,
  },
  {
    path: 'sorting',
    component: SortingComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  declarations: [],
  exports: [RouterModule],
})
export class AppRouterModule {}
