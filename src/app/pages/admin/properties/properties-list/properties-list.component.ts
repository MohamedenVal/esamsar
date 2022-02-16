import { Property } from 'src/app/models/property';
import { PropertiesService } from 'src/app/services/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css'],
})
export class PropertiesListComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {
    this._getProducts();
  }

  private _getProducts() {
    this.propertiesService.getProperties().subscribe((cats) => {
      this.properties = cats;
    });
  }

  deleteProperty(id: string) {
    this.propertiesService.deleteProperty(id)
      .subscribe(
        () => {
          this._getProducts();
          // on succes show action result

          // show action service needed
        }
      )
  }
}
