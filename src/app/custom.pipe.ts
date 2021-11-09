import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let year: any = new Date().getFullYear()
    let year2: any = value

    return year+year2;
  }

}
