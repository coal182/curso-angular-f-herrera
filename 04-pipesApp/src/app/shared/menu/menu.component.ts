import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Dates',
            icon: 'pi pi-align-left',
            routerLink: '',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'Non common',
            icon: 'pi pi-globe',
            routerLink: 'non-common',
          },
        ],
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        routerLink: 'sorting',
      },
    ];
  }
}
