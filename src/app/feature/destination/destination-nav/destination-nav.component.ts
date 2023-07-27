import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination-nav',
  templateUrl: './destination-nav.component.html',
  styleUrls: ['./destination-nav.component.css']
})
export class DestinationNavComponent {
  @Input() lat?: number;
  @Input() lng?: number;
  @Input() id?: string | null;
  @Input() category?: string | null;
  @Input() path?: string;
  showMap: boolean = false;

  onMap(){
    this.showMap = !this.showMap;
  }
}
