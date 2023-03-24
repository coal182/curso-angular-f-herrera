import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

interface GraficaRRSSHttp {
  facebook: number;
  youtube: number;
  whatsapp: number;
  ['facebook-messenger']: number;
  instagram: number;
}

interface HttpDataset{
  labels: string[];
  values: number[];
}

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales(): Observable<GraficaRRSSHttp>{
    return this.http.get<GraficaRRSSHttp>('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData(): Observable<HttpDataset>{
    return this.http.get<GraficaRRSSHttp>('http://localhost:3000/grafica').pipe(
      delay(1500),
      map((data) => {
      const labels = Object.keys(data);
      const values = Object.values(data);
      return {labels, values}
    }));
  }
}
