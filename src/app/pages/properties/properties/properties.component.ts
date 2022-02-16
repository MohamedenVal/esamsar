import { PropertiesService } from 'src/app/services/properties.service';
import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  properties: Property[] = [];
  @Input() fileters: string[] = [];
  @Input() ft = true;
  @Input() numberOfProps = 24;

  constructor(
    private propertyService: PropertiesService
  ) { }

  ngOnInit(): void {
    if (this.ft){
      this._getFeaturedProperties(this.numberOfProps);
    }else {
      this._getProperties(this.fileters)
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

  }
