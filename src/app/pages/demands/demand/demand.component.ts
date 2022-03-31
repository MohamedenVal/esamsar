import { Component, Input, OnInit } from '@angular/core';
import { Demand } from 'src/app/models/demand.model';
import { DemandsService } from 'src/app/services/demands.service';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  @Input() demand!: Demand;
  liked = false;

  constructor( ) { }

  ngOnInit(): void {
  }

  addFavourite() {
    this.liked = !this.liked;
  }
}
