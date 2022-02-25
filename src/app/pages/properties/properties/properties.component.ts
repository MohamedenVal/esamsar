import { PropertiesService } from 'src/app/services/properties.service';
import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  properties: Property[] = [];
  // @Input() fileters: string[] = [];
  @Input() ft = false;
  @Input() numberOfProps = 24;
  rent = false;

  constructor(
    private propertyService: PropertiesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let data = this.route.snapshot.data;
    this.rent = data.rent;

    if (this.ft ){
      this._getFeaturedProperties(this.numberOfProps );
    }else {
      this._getProperties()
    }


  }

  private _getFeaturedProperties(num: number) {
    this.propertyService.getFeaturedProperties(num).subscribe(
      (properties) => {
        this.properties = properties
      }
  )}

  private _getProperties(locationFilter: string[] = [], categoryFilter: string[] = [], priceFilter: string[] = []): void {

    this.propertyService.getProperties(locationFilter, categoryFilter, priceFilter, [], this.rent)
      .subscribe(
        (properties) => {
          this.properties = properties;
        }
      )
  }

  }
