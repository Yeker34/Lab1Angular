import { Component } from '@angular/core';
import { ItalicDirective } from '../../core/directive/italic.directive';

@Component({
  selector: 'app-page2',
  imports: [ItalicDirective],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

}
