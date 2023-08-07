import { Pipe, PipeTransform } from '@angular/core';
import { Observable, finalize } from 'rxjs';

@Pipe({
  name: 'loading'
})
export class LoadingPipe implements PipeTransform {

  transform(value: any): any {
    // Проверка дали стойността е обсървабъл (Observable)
    if (value && typeof value.subscribe === 'function') {
      // Ако е обсървабъл, използваме pipe за управление на зареждането
      return new Observable((observer) => {
        observer.next(null); // Показваме loading компонента докато зареждаме данните
        value.pipe(
          finalize(() => observer.complete()) // Когато данните се заредят, приключваме с observer
        ).subscribe({
          next: (data: unknown) => observer.next(data),
          error: (error: any) => observer.error(error)
      });
      });
    } else {
      // Ако не е обсървабъл, връщаме стойността без промяна
      return value;
    }
  }
}
