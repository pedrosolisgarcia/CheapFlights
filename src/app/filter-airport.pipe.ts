import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAirport'
})
export class FilterAirportPipe implements PipeTransform {

  transform(value: any, typedText: string): any {
    if (value === undefined || typedText === '' || typedText === ' ') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item['name'].includes(typedText)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
