import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'task1Pipe'
})
export class Task1PipePipe implements PipeTransform {

  transform(value: any, key?:any): any  {
    if (key=='uppercase') {
      return value.toUpperCase();
  } else   if (key=='lowercase') {
      return  value.toLowerCase();
  }
  else {
    return value;
  }
  }

}
