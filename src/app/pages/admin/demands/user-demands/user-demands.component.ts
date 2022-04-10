import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demand } from 'src/app/models/demand.model';
import { DemandsService } from 'src/app/services/demands.service';

@Component({
  selector: 'app-user-demands',
  templateUrl: './user-demands.component.html',
  styleUrls: ['./user-demands.component.css']
})
export class UserDemandsComponent implements OnInit {
  demands!: Demand[];

  constructor(
    private router: Router,
    private demandsService: DemandsService,
  ) { }

  ngOnInit(): void {
    this._getDemands();
  }

  updateCategory(demandId: string) {
    this.router.navigateByUrl(`demands/users/form/${demandId}`);
  }

  private _getDemands() {
    this.demandsService.getUsersDemands()
      .subscribe((dems) => {
        this.demands = dems;
    });

  }

  deleteDemand(demandId: string) {
    this.demandsService.deleteUserDemand(demandId)
      .subscribe(() => {this._getDemands();});
  }

  addToDemands(id: string) {
    this.demandsService.validateDemand(id)
      .subscribe((dem) => {
        // code ux ...
      })
  }

}
