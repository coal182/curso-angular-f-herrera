import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    console.log('📌 ~ value:', value);
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);
    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }
    if (errors.includes('minlength')) {
      const requiredLength = this._errors['minlength'].requiredLength;
      const currentLength = this._errors['minlength'].actualLength;
      this.htmlElement.nativeElement.innerHTML = `Mínimo ${currentLength} / ${requiredLength} caracteres`;
      return;
    }
    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo no tiene el formato de email correcto';
      return;
    }
  }
}
