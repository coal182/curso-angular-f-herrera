import { Component, OnInit } from '@angular/core';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  log(heroes) {
    console.log(heroes);
  }
}
