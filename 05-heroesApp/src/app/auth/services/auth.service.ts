import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Auth } from '../interfaces/auth.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private endpointUrl: string = environment.endpointUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth };
  }

  constructor(private http: HttpClient) {}

  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.endpointUrl}/usuarios/1`).pipe(
      map((auth) => {
        this._auth = auth;
        console.log('map', auth);
        return true;
      })
    );
  }

  login() {
    return this.http.get<Auth>(`${this.endpointUrl}/usuarios/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => localStorage.setItem('token', auth.id))
    );
  }

  logout() {
    console.log('logging out');
    localStorage.removeItem('token');
    this._auth = undefined;
  }
}
