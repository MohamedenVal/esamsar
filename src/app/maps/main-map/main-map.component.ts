import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {

  // map!: mapboxgl.Map;
  constructor() { }

  ngOnInit(): void {
  }

}



// var map = new mapboxgl.Map({
//   container: 'YOUR_CONTAINER_ELEMENT_ID',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });
