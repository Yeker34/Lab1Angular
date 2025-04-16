import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ReversePipe } from '../../core/pipes/reverse.pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-page1',
  imports: [ReversePipe, CommonModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  exampleArray = ['Я', 'обязательно', 'сдам', 'лабы'];
}
