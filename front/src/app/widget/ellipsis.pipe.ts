import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: unknown, maxLength = 10): string {
    if (typeof value !== 'string') {
      throw new Error(
        'ellipsis needs a string as an input. Not a ' + typeof value
      );
    }
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '...';
    }
    return value;
  }
}
