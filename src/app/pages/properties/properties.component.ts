import { Property } from 'src/app/models/property';
import { PropertiesService } from 'src/app/services/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesPageComponent implements OnInit {
  properties!: Property[];

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertiesService.getProperties()
      .subscribe((props: Property[]) => {
        this.properties = props;
      })
  }
}
