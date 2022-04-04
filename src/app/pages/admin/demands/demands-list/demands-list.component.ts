import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Demand } from 'src/app/models/demand.model';
import { DemandsService } from 'src/app/services/demands.service';

@Component({
  selector: 'app-demands-list',
  templateUrl: './demands-list.component.html',
  styleUrls: ['./demands-list.component.css']
})
export class DemandsListComponent implements OnInit {
  demands!: Demand[];
  usersPage = false;

  constructor(
    private router: Router,
    private demandsService: DemandsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let data = this.route.snapshot.data;
    this.usersPage = data.user;

    this._getDemands();
  }

  updateCategory(demandId: string) {
    if(!this.usersPage){
      this.router.navigateByUrl(`demands/form/${demandId}`);
    } else {
      this.router.navigateByUrl(`demands/users/form/${demandId}`);
    }
  }

  private _getDemands() {
    if(!this.usersPage){
      this.demandsService.getDemands().subscribe((dems) => {
        this.demands = dems;
      });
    } else {
      this.demandsService.getUsersDemands().subscribe((dems) => {
        this.demands = dems;
      });
    }
  }

  deleteDemand(demandId: string) {
    if(!this.usersPage){
      this.demandsService.deleteDemand(demandId)
        .subscribe(() => {this._getDemands();});
    } else {
      this.demandsService.deleteUserDemand(demandId)
        .subscribe(() => {this._getDemands();});
    }
  }

  addToDemands(id: string) {
    this.demandsService.validateDemand(id)
      .subscribe((dem) => {
        // code ux ...
      })
  }
}
