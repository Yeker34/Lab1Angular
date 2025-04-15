import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

export class User {
  constructor(public name: string, public age: number, public surname: string) {

  }
}
@Component({
  selector: 'app-page3',
  imports: [FormsModule, CommonModule],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  users: User[] = [];

  name = '';
  surname = '';
  age = 0;

  constructor(private dataService: DataService) {
    console.log(this.dataService.getExampleData());
  }

  addUser() {
    this.users.push(new User(this.name, this.age, this.surname));
    this.name = '';
    this.surname = '';
    this.age = 0;
  }

  onNameChange(): void {
    console.log('Поле изменилось: ' + this.name)
  }

  onSubmit (form: NgForm) {
    console.log(form);
  }
}
