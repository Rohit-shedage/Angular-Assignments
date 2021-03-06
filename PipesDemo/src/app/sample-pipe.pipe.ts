import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplePipe'
})
export class SamplePipePipe implements PipeTransform {

  transform(value: number): number {
    return Math.sqrt(value);
  }

}
