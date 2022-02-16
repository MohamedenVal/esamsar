import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mogata } from 'src/app/models/mogata';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-mogatas-list',
  templateUrl: './mogatas-list.component.html',
  styleUrls: ['./mogatas-list.component.css']
})
export class MogatasListComponent implements OnInit {
  mogatas: Mogata[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getMogatas();
  }

  deleteMogata(mogataId: string) {
    this.categoriesService.deleteMogata(mogataId).subscribe(
      () => {
        this._getMogatas();
      },
      () => {
        //
      }
    );
  }

  updateMogata(id: string) {
    this.router.navigateByUrl(`mogatas/form/${id}`);
  }
  private _getMogatas() {
    this.categoriesService.getMogatas().subscribe((mogatas) => {
      this.mogatas = mogatas;
    });
  }

  confirmDelete() {
    //
  }
}
