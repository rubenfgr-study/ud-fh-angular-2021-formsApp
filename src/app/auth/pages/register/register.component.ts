import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nameLastnamePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: ['', [Validators.required, this.validatorService.cantStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: [
        this.validatorService.equalFields('password', 'passwordRepeat'),
      ],
    }
  );

  get emailErrorMsg() {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'Email is required';
    } else if (errors?.pattern) {
      return 'Email is not valid';
    } else if (errors?.emailExists) {
      return 'Email exist';
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Ruben Francisco',
      email: 'test@test.com',
      username: 'rubenfgr',
      password: '123456',
      passwordRepeat: '123456'
    });
  }

  isInvalidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

/*   emailRequired() {
    return this.myForm.get('email')?.errors?.required && this.myForm.get('email')?.touched;
  }

  emailFormat() {
    return this.myForm.get('email')?.errors?.pattern && this.myForm.get('email')?.touched;
  }

  emailExists() {
    console.log(this.myForm.get('email')?.errors);
    return this.myForm.get('email')?.errors?.emailExists && this.myForm.get('email')?.touched;
  } */

  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
