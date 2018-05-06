import { Component, Input } from '@angular/core';

@Component({
  selector: 'date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent {
    @Input() date: '=';
}
