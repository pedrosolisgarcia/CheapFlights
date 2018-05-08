import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterAirport: string, atrName: string): any {
    if (undefined === value || filterAirport === '' || filterAirport === ' ') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[atrName].includes(filterAirport)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
