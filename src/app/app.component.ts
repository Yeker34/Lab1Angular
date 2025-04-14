import { AfterContentInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, DoCheck,AfterContentInit {
  title = 'digital-department-application';

  greeting = "";

  ngOnInit(): void {
    console.log('Я тут');
  }
  ngOnChanges(): void {
    console.log('Я изменился');
  }
  ngDoCheck(): void {
    console.log('я проверился');
  }
  ngAfterContentInit(): void {
    console.log('Я появился после проверки');
  }
  ngAfterContentChecked(): void {
    console.log('Я появился, если содержимое поменялось');
  }
  ngAfterViewInit(): void {
    console.log('Я появился после инициализации представления компоненты');
  }
  ngAfterViewChecked(): void {
    console.log('Я появился после проверки на изменение содержимого');
  }
  ngOnDestroy(): void {
    console.log('я скоро умру');
  }

  onSayHi(): void {
    alert("Привет, " + this.greeting); 
  }
}
