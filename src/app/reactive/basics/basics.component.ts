import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  /*   myForm: FormGroup = new FormGroup({
    product: new FormControl('RTX 4080ti', [Validators.required]),
    price: new FormControl(1500),
    stocks: new FormControl(5)
  });
 */

  myForm: FormGroup = this.fb.group({
    product: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stocks: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm.setValue({
      product: 'AAA',
      price: 0,
      stocks: 0,
    });
  }

  fieldIsValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  save() {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset({
      product: '',
      price: 0,
      stocks: 0,
    });
  }
}
