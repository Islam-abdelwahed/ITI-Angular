import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringContains',
})
export class StringContainsPipe implements PipeTransform {
  transform(items: string[], searchText: string): string[] {
    if (!items?.length) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    const key = searchText.toLowerCase();

    return items.filter((item) => item.toLowerCase().includes(key));
  }
}
