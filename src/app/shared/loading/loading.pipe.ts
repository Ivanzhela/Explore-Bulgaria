import { Pipe, PipeTransform } from '@angular/core';
import { Observable, finalize } from 'rxjs';

@Pipe({
  name: 'loading'
})
export class LoadingPipe implements PipeTransform {

  transform(value: any): any {
    if (value && typeof value.subscribe === 'function') {
      return new Observable((observer) => {
        observer.next(null);
        value.pipe(
          finalize(() => observer.complete())
        ).subscribe({
          next: (data: unknown) => observer.next(data),
          error: (error: TypeError) => observer.error(error)
      });
      });
    } else {
      return value;
    }
  }
}
