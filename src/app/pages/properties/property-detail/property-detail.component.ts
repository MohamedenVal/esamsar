import { PropertiesService } from 'src/app/services/properties.service';
import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  property!: Property;

  constructor(
    private propertiesService: PropertiesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      if (params.productid) {
        this.getPropertyByName(params.productid)
      }
     });
  }

  getPropertyByName(name: string): void {
    //Get the property
    this.propertiesService.getPropertyByName(name).subscribe(
      (property: Property) => {
        this.property = property;
      }
    )
  }

}
