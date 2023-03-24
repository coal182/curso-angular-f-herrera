import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flies',
})
export class FliesPipe implements PipeTransform {
  transform(flies: boolean) {
    return flies ? 'flies' : "doesn't flies";
  }
}
