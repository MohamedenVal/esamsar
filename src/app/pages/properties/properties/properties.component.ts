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
  @Input() numberOfProps = 2;
  byMogata: Property[] = [];
  byWilaya: Property[] = [];

  constructor(
    private propertyService: PropertiesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.ft){
      this._getFeaturedProperties(this.numberOfProps );
    }else {
      this.route.params.subscribe(
        (params) => {
          if(params.mogataid) {
            this._getByMogataOrWilaya(true, [params.mogataid]);
          }
          if(params.wilayaid) {
            this._getByMogataOrWilaya(false, [params.wiliyaid]);
          }
          if(params.categoryid) {
            this._getProperties([params.categoryid])
          }
        }
      )
      this._getProperties()
    }
  }

  private _getFeaturedProperties(num: number) {
    this.propertyService.getFeaturedProperties(num).subscribe(
      (properties) => {
        this.properties = properties
      }
  )}

  private _getProperties(filterString?: string[]): void {
    this.propertyService.getProperties(filterString).subscribe(
      (properties) => {
        this.properties = properties;
      }
    )
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
