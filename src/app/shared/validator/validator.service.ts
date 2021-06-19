import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  nameLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  cantStrider = (control: FormControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        notStrider: true,
      };
    }
    return null;
  };

  equalFields(field1: string, field2: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const field1Value = control.get(field1)?.value;
      const field2Value = control.get(field2)?.value;

      if (field1Value !== field2Value) {
        control.get(field2)?.setErrors({ notEquals: true });
        return {
          notEquals: true,
        };
      }
      control.get(field2)?.setErrors(null);
      return null;
    };
  }
}
