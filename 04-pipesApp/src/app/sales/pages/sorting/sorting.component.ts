import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
})
export class SortingComponent {
  onUppercase: boolean = true;
  sortBy: string = '';
  heroes: Hero[] = [
    {
      name: 'Superman',
      flies: true,
      color: Color.azul,
    },
    {
      name: 'Batman',
      flies: false,
      color: Color.negro,
    },
    {
      name: 'Robin',
      flies: false,
      color: Color.verde,
    },
    {
      name: 'Daredevil',
      flies: false,
      color: Color.rojo,
    },
    {
      name: 'Green Lantern',
      flies: true,
      color: Color.verde,
    },
  ];

  toggle() {
    this.onUppercase = !this.onUppercase;
  }

  changeSortBy(col: string) {
    this.sortBy = col;
  }
}
