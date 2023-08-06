import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
    console.log('control', this.control);
  }

  containsErrors() {
    return this.control.dirty && this.control.touched && this.control.errors
  }

  nullErrors() {
    return this.control.dirty && this.control.touched && this.control.errors === null;
  }

}
