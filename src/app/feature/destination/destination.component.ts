import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destination } from './destination-type';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent {
  param?: string | null;
  destination!: Destination;
  isLoading: boolean = true;
  loadingTemplate!: TemplateRef<NgIfContext> | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.destination = data['data'];
      this.isLoading = false;
    });
    this.param = this.route.snapshot.paramMap.get('id');
  }
}
