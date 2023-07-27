import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-date',
  templateUrl: './trip-date.component.html',
  styleUrls: ['./trip-date.component.css']
})
export class TripDateComponent {
@Input() startDate?: string;
@Input() endDate?: string;
}
