import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    gender: ['M', [Validators.required, Validators.pattern(/^[MW]$/)]],
    notifications: [false, [Validators.required]],
    terms: [false, [Validators.requiredTrue]],
  });

  person = {
    gender: 'W',
    notifications: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm.reset({ ...this.person, terms: false });
    this.myForm.valueChanges.subscribe(({ terms, ...others }) => {
      this.person = others;
    });
  }

  save() {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      return;
    }
    console.log(this.myForm.value);
  }
}
