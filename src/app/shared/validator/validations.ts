import { FormControl } from '@angular/forms';

export const nameLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const cantStrider = (control: FormControl): any => {
  const value = control.value?.trim().toLowerCase();
  if (value === 'strider') {
    return {
      notStrider: true,
    };
  }
  return null;
};
