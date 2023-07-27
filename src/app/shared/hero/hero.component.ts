import { Component, Input, OnChanges } from '@angular/core';
import { Destination } from 'src/app/feature/destination/destination-type';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent{
  @Input() content?: string;
  @Input() img?: string;
  @Input() destination?: Destination;
}
