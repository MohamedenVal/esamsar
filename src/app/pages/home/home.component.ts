import { ActivatedRoute } from '@angular/router';
import { LocationsService } from 'src/app/services/locations.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { PropertiesService } from 'src/app/services/properties.service';
import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';

export interface Mekane {
  name: string;
  id: string;
  type: 'wilaya' | 'mogata';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  properties: Property[] = [];
  numProperties: number = 6;
  locationsArray: Mekane[] = [];
  propsParams= '';

  constructor(
    private propertiesService: PropertiesService,
    private categoriesService: CategoriesService,
    private locationsService: LocationsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._getLocations();
    this._getProperties();
  }

  private _getProperties(): void {
    this.propertiesService.getFeaturedProperties(this.numProperties)
      .subscribe(
        (response) => this.properties = response
      )
  }

  private _getLocations(): void {
    this.categoriesService.getMogatas()
      .subscribe( (response) => {
        response.forEach( (elememt) => {
          let mekane: Mekane = {
            name: elememt.name,
            id: elememt.id,
            type: 'mogata'
          }
          this.locationsArray.push(mekane);
        })
      });

    this.locationsService.getWilayas()
      .subscribe( (response) => {
        response.forEach( (elememt) => {
          let mekane: Mekane = {
            name: elememt.name,
            id: elememt.id,
            type: 'wilaya'
          }
          this.locationsArray.push(mekane);
        })
      })

  }
}
