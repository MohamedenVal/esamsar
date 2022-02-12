import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  toolTip = false;
  min = 100000;
  max = 1000000000;
  minMax = this.max;

  constructor() { }

  ngOnInit(): void {
  }

  showToolTip(): void {
    // show the akar tooltip
    this.toolTip = !this.toolTip;
  }

  range(): void {
    console.log("Min : " + this.min);
    console.log("Max : " + this.max);

  }
}
