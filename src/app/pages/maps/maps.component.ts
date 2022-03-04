import { Component, Input, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { PropertiesService } from 'src/app/services/properties.service';
import { Property } from 'src/app/models/property';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  property!: Property;
  canShow = false;
  @Input() detailProperty = this.property;

  // mapbox ..
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 18.050508691302554;
  lng = -15.963319982003418;


  constructor(
    private propertiesService: PropertiesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    mapboxgl!.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 10,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.route.params.subscribe((params) => {
      if (params.name) {
        this._getProperty(params.name);
      }
     });

  }

  private _getProperty(name: string): void {
    this.propertiesService.getPropertyByName(name)
      .subscribe( (response) => {
          let cords = response[0].location?.split(',') || [18.0, -15.0];

          let el = document.createElement('div');
          el.style.width = '30px';
          el.style.height = '30px';
          el.style.background = `url(assets/icons/mapbox-marker-icon-gray.svg)`;
          el.style.backgroundRepeat = 'no-repeat';
          el.className = 'marker';


          el.addEventListener('click', () => {
            window.alert(response[0].name);
          })
          // Adding marker
          const m = new mapboxgl.Marker(el)
          .setLngLat([+cords[1], +cords[0]])
          .addTo(this.map)


        this.property = response[0];
      })
  }

}
