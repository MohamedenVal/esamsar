import { PropertiesService } from 'src/app/services/properties.service';
import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  property!: Property;
  @Input() mapProperty = this.property;
  // canShow = false;
  mainImagePath =  'assets/الصمصار';
  siteUrl = 'https://samsar.rf.gd';

  constructor(
    private propertiesService: PropertiesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      if (params.name) {
        this._getPropertyByName(params.name);
      }
     });

  }

  private _getPropertyByName(name: string): void {
    //Get the property
    this.propertiesService.getPropertyByName(name).subscribe(
      (response: Property[]) => {
        this.property = response[0];
        this.mainImagePath = this.property.image;
      }
    )
  }

  showGalleryImage(image: string): void {
    this.mainImagePath = image;
  }

}
