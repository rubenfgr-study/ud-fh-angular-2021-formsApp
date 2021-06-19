import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.required
    ),
  });

  newFavorite: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  isInvalidField(field: string) {
    return (
      this.myForm.controls[field].invalid && this.myForm.controls[field].touched
    );
  }

  addFavorite() {
    if (this.newFavorite.invalid) {
      return;
    }
    this.favoritesArr.push(
      this.fb.control(this.newFavorite.value, [Validators.required])
    );
    this.newFavorite.reset();
  }

  removeFavorite(index: number) {
    this.favoritesArr.removeAt(index);
  }

  save() {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      return;
    }
    console.log(this.myForm.value);
  }
}
