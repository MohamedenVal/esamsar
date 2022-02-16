import { Property } from 'src/app/models/property';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @Input() property!: Property;

  constructor() { }

  ngOnInit(): void {
  }

}
