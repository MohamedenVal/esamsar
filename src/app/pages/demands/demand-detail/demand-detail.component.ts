import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demand } from 'src/app/models/demand.model';
import { DemandsService } from 'src/app/services/demands.service';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.component.html',
  styleUrls: ['./demand-detail.component.css']
})
export class DemandDetailComponent implements OnInit {

  demand!: Demand;
  @Input() mapDemand = this.demand;
  canShow = false;
  liked = false;
  siteUrl = 'https://samsar.rf.gd';

  constructor(
    private demandsService: DemandsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.getDemand(params.id);
      }
     });
  }

  private getDemand(id: string) {
    this.demandsService.getSingleDemand(id)
      .subscribe((dem) => {
        this.demand = dem;
      })
  }

  addFavourite() {
    this.liked = true;
  }
}
