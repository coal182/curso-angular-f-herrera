import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  });

  // llenar selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: PaisSmall[] = [];

  //UI
  cargando: boolean = false;

  constructor(private fb: FormBuilder, private paisesService: PaisesService){}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges.pipe(
      tap((_) => {
        this.paises = [];
        this.miFormulario.get('pais')?.reset('');
        this.cargando = true;
      }),
      switchMap((region) => this.paisesService.getPaisesPorRegion(region))
    ).subscribe((paises) => {
      this.paises = paises;
      this.cargando = false;
    });

    this.miFormulario.get('pais')?.valueChanges.pipe(
      tap((_) => {
        this.fronteras = [];
        this.miFormulario.get('frontera')?.reset('');
        this.cargando = true;
      }),
      switchMap((codigo) => this.paisesService.getPaisPorCodigo(codigo)),
      switchMap((pais) => this.paisesService.getPaisesPorCodigos(pais?.borders! ))
    ).subscribe((paises) => {
      this.fronteras = paises;
      this.cargando = false;
    });

  }

  guardar(){
    console.log('🚩 ~ this.miFormulario.value', this.miFormulario.value);
  }

}
