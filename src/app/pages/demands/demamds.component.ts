import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/app/models/demand.model';
import { DemandsService } from 'src/app/services/demands.service';

@Component({
  selector: 'app-demamds',
  templateUrl: './demamds.component.html',
  styleUrls: ['./demamds.component.css']
})
export class DemamdsComponent implements OnInit {

  demands!: Demand[];

  constructor(
    private demandService: DemandsService,
  ) { }

  ngOnInit(): void {
    this._getDemands();
  }

  private _getDemands() {
    this.demandService.getDemands()
      .subscribe( (demands) => {
        this.demands = demands;
      })
  }
}
