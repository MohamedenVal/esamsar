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
  byMogata: Property[] = [];
  byWilaya: Property[] = [];
  @Input() mogataPage = false;
  @Input() wilayaPage = false;
  @Input() categoriesPage = false;
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
      this.route.params.subscribe(
        (params) => {
          if(params.mogataid) {
            this._getByMogataOrWilaya(true, [params.mogataid]);
            this.mogataPage = true;
          }
          if(params.wilayaid) {
            this._getByMogataOrWilaya(false, [params.wiliyaid]);
            this.wilayaPage = true;
          }

          if(params.categoryid) {
            this._getProperties([params.categoryid]);
            this.categoriesPage = true;
          }
        }
      )
      this._getProperties()
    }

    if (this.route.snapshot.queryParamMap.has("location")) {
      console.log(this.route.snapshot.queryParams)

    }
  }

  private _getFeaturedProperties(num: number) {
    this.propertyService.getFeaturedProperties(num).subscribe(
      (properties) => {
        this.properties = properties
      }
  )}

  private _getProperties(locationFilter: string[] = [], categoryFilter: string[] = [], priceFilter: number[] = []): void {
    
    this.propertyService.getProperties(locationFilter, categoryFilter, priceFilter, [], this.rent)
      .subscribe(
        (properties) => {
          this.properties = properties;
        }
      )

    // this.propertyService.getProperties().subscribe(
    //   (properties) => {
    //     this.properties = properties;
    //   }
    // )

  }

  private _getByMogataOrWilaya(mogata: boolean, filter?: string[]): void {
    if (mogata) {
      this.propertyService.getByMogata(filter)
      .subscribe(
        (response) => {
          this.byMogata = response
        }
      )
    } else {
      this.propertyService.getByWilaya(filter)
      .subscribe(
        (response) => {
          this.byWilaya = response
        }
      )
    }


  }

  }
