import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit {
  private observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.elementRef.nativeElement.classList.add('show_el');
        } else {
          this.elementRef.nativeElement.classList.remove('show_el');
        }
      });
    });

    this.observer.observe(this.elementRef.nativeElement);
  }
}
