import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  @Input() lat!: number;
  @Input() lng!: number;
  @ViewChild('map', {static: true}) mapElement: any;
  map?: google.maps.Map;

  ngOnInit(): void {
    const latLng = new google.maps.LatLng(this.lat, this.lng)
    const mapProperties = {
         center: latLng,
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var marker = new google.maps.Marker({
      position: latLng,
      title:"Hello World!"
  });
    const newMap = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    marker.setMap(newMap);

    this.map = newMap;
 }
}
