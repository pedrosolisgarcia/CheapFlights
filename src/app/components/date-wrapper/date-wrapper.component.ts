import { Component, Input } from '@angular/core';
import controller from './date-wrapper.controller';

@Component({
  selector: 'date-wrapper',
  templateUrl: './date-wrapper.component.html',
  styleUrls: ['./date-wrapper.component.css']
})
export class DateWrapperComponent {

    @Input() startDate: '=';
    @Input() endDate: '='

  bindings: {
    controller
  }
}