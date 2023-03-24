import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-non-common',
  templateUrl: './non-common.component.html',
  styleUrls: ['./non-common.component.css'],
})
export class NonCommonComponent {
  // i18nSelect
  name: string = 'Cristian';
  gender: string = 'male';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18nPlural
  customers: Array<string> = [
    'Maria',
    'Pedro',
    'Juan',
    'Hernando',
    'Eduardo',
    'Fernando',
  ];
  customersMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando',
  };

  changeCustomer() {
    this.name = 'Natalia';
    this.gender = 'female';
  }

  removeCustomer() {
    this.customers.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Fernando',
    age: 35,
    address: 'Ottawa, Canadá',
  };

  // Json Pipe
  heroes = [
    {
      name: 'Superman',
      flies: true,
    },
    {
      name: 'Robin',
      flies: false,
    },
    {
      name: 'Aquaman',
      flies: false,
    },
  ];

  // Async pipe
  myObservable = interval(1000); // 0,1,2,3,4,5,6...

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have promise data');
    }, 3500);
  });
}
