import { Component } from '@angular/core';
import { ItalicDirective } from '../../core/directive/italic.directive';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page2',
  imports: [ItalicDirective, ReactiveFormsModule, CommonModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  users: any[] = [];

  myForm: FormGroup = new FormGroup({
    "userName": new FormControl('', Validators.required),
    "userSurname": new FormControl('', Validators.required)
  });;

  constructor() {
    this.onreInitForm();
  }

  onSubmit() {
    this.users.push(this.myForm.getRawValue());
  }

  onreInitForm() {
    this.myForm = new FormGroup({
      "userName": new FormControl('', Validators.required),
      "userSurname": new FormControl('', Validators.required)
    });
  }
}

  