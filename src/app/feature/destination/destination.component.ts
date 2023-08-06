import { Component, Input, OnInit } from '@angular/core';
import { DestinationService } from './destination.service';
import { ActivatedRoute } from '@angular/router';
import { Destination, PlaceDetails } from './destination-type';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent  {
  param?: string;
  destination!: Destination;

  constructor(
    private service: DestinationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.destination = data['data'];
    });
  }

}
