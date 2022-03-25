import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demand } from 'src/app/models/demand.model';
import { DemandsService } from 'src/app/services/demands.service';

@Component({
  selector: 'app-demands-list',
  templateUrl: './demands-list.component.html',
  styleUrls: ['./demands-list.component.css']
})
export class DemandsListComponent implements OnInit {
  demands!: Demand[];

  constructor(
    private router: Router,
    private demandsService: DemandsService
  ) { }

  ngOnInit(): void {
    this._getDemands();
  }

  updateCategory(demandId: string) {
    this.router.navigateByUrl(`demands/form/${demandId}`);
  }

  private _getDemands() {
    this.demandsService.getDemands().subscribe((dems) => {
      this.demands = dems;
    });
  }

  deleteDemand(demandId: string) {
    this.demandsService.deleteDemand(demandId).subscribe(
      () => {
        this._getDemands();
      },
      () => {
        //
      }
    );
  }

}
