import { Component, Input } from '@angular/core';
import { GOOGLE_KEY } from 'src/config';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() photos!: string[];
  key: string = GOOGLE_KEY;
}
