import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {
  nameLower: string = 'cristian';
  nameUpper: string = 'CRISTIAN';
  nameFull: string = 'cRistian mARTin';

  date: Date = new Date();
}
