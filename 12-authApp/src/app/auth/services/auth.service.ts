import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string =  environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    return {...this._usuario};
  }

  constructor(private http: HttpClient) { }

  registro(name: string, email: string, password: string){
    const url = `${this.baseUrl}/auth/new`;
    const body = {name, email, password};

    return this.http.post<AuthResponse>(url, body).pipe(
      tap(({ ok, token }) => {
        if (ok === true) {
          localStorage.setItem('token', token!);          
        }
      }),
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    )
    
  }

  login( email: string, password: string ){
    const url = `${this.baseUrl}/auth`;
    const body = {email, password}
    
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(({ ok, token }) => {
          if (ok === true) {
            localStorage.setItem('token', token!);            
          }
        }),
        map((resp) => resp.ok),
        catchError(err => of(err.error.msg))
      );
  }

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;

    const headers: HttpHeaders = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(({ ok, name, email, uid, token }) => {
          
          localStorage.setItem('token', token!);
          this._usuario = {
            name: name!,
            email: email!,
            uid: uid!,
          }
          
          return ok
        }),
        catchError(err => of(false))
      );
    
  }

  logout(){
    localStorage.clear();
  }
}
