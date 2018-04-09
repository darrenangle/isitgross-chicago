import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'violations'
})
export class ViolationsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return value;
    }
    const violationsArray = value.split('|');
    console.log(violationsArray);
    return violationsArray;
  }

}
