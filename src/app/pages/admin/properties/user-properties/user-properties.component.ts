import { PropertiesService } from 'src/app/services/properties.service';
import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { timer } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-properties',
  templateUrl: './user-properties.component.html',
  styleUrls: ['./user-properties.component.css']
})
export class UserPropertiesComponent implements OnInit {
  properties: Property[] = [];

  constructor(
    private propertiesService: PropertiesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this._getProducts();
  }

  private _getProducts() {
    this.propertiesService.getUserProperties()
    .subscribe((cats) => {
      this.properties = cats;
    });
  }

  add(id: string): void {
    this.propertiesService.validate(id)
      .subscribe( () => {
        //
        this.returnBack();
      })
  }

  // delete user property
  delete(id: string) {
    this.propertiesService.deleteUserProperty(id)
      .subscribe( () => {
        //
        this._getProducts();
      })
  }

  // Return to previous page
  returnBack() {
    timer(2000)
      .toPromise()
      .then(() => {
        this.location.back();
      });
  }
}
