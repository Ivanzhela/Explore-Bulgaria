import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination-about',
  templateUrl: './destination-about.component.html',
  styleUrls: ['./destination-about.component.css'],
})
export class DestinationAboutComponent {
  @Input() name?: string;
  @Input() rating!: number;
  @Input() content?: string;

  showAboutContent: boolean = false;

  onAboutContent(): void {
    this.showAboutContent = !this.showAboutContent;
  }
}
