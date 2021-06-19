import { Directive, Input } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appCustomMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minimun!: number;

  constructor() {}

  validate(control: FormControl): ValidationErrors | null {
    const inputValue = control.value;
    return inputValue < this.minimun ? { customMin: true } : null;
  }
}
