import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { Router } from '@angular/router';
import { Wilaya } from 'src/app/models/wilaya';

@Component({
  selector: 'app-wilayas-list',
  templateUrl: './wilayas-list.component.html',
  styleUrls: ['./wilayas-list.component.css']
})
export class WilayasListComponent implements OnInit {
  wilayas!: Wilaya[];

  constructor(
    private locationsService: LocationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._getWilayas();
  }

  deleteWilaya(id: string) {
    this.locationsService.deleteWilaya(id).subscribe(
      () => {
        this._getWilayas();
      },
      () => {
        //
      }
    );
  }

  updateWilaya(id: string) {
    this.router.navigateByUrl(`wilayas/form/${id}`);
  }
  private _getWilayas() {
    this.locationsService.getWilayas().subscribe((wilayas) => {
      this.wilayas = wilayas;
    });
  }

  confirmDelete() {
    //
  }

}
