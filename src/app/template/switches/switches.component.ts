import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent {
  @ViewChild('myForm') myForm!: NgForm;

  person = {
    gender: 'M',
    notifications: true,
  };

  terms: boolean = false;

  save() {
    console.log(this.myForm.controls);
  }
}
