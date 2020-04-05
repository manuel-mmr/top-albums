import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(values: any, search?: any): any {
    if (!values || !search) {
      return values;
  }
    return values.filter(value => {
      const searchText = search.toLowerCase();
      return value.name.toLowerCase().indexOf(searchText) !== -1 ||
        value.artist.toLowerCase().indexOf(searchText) !== -1;
    });

    return values;
  }

}
