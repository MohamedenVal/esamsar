import { LocationsService } from 'src/app/services/locations.service';
import { Mekane } from 'src/app/pages/home/home.component';
import { Category } from 'src/app/models/category';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { timer } from 'rxjs';

@Component({
  selector: 'home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  mekaneList: Mekane[] = [];
  @Input() rent = false;
  categories: Category[] = [];
  searchResult = false;
  resultList: Mekane[] = [];

  //form elements
  form!: FormGroup;
  searchType = '';



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService,
    private locationsService: LocationsService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      location: [''],
      category: [''],
      maxprice: [''],
      minprice: [''],
      numberrooms: ['']
    });
    this._getLocations();
    this.getCategories();
  }

  search(querry: any ): void {
    this.resultList = [];
    this.searchResult = true;
    this.mekaneList.forEach( listItem => {
      if(listItem.name.includes(querry)) {
        this.resultList.push(listItem);
      }
    });

    if(querry === '' || this.resultList === []) {
      this.resultList = [];
      this.searchResult = false;
    }
  }

  hideList(): void {
    timer(500).toPromise()
      .then(() => {
        this.searchResult = false;
      });
  }

  private _getLocations(): void {
    this.categoriesService.getMogatas()
      .subscribe( (response) => {
        response.forEach( (elememt) => {
          let mekane: Mekane = {
            name: elememt.name,
            id: elememt.id,
            type: 'mogata'
          }
          this.mekaneList.push(mekane);
        })
      });

    this.locationsService.getWilayas()
      .subscribe( (response) => {
        response.forEach( (elememt) => {
          let mekane: Mekane = {
            name: elememt.name,
            id: elememt.id,
            type: 'wilaya'
          }
          this.mekaneList.push(mekane);
        })
      })
  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe( (response) => {
        this.categories = response
      })
  }

  onSubmit() {
    let localLocation = '';
    this.searchType = this.rent ? "rent" : "";
    this.resultList.forEach( (element) => {
      if (this.resultList.length < 2 ){
        localLocation = localLocation + element.id
      } else {
        localLocation = localLocation + element.id + ','
      }
    })
    this.router.navigate(
      [`properties/search/${this.searchType}`],
      {queryParams: {
        mogata: localLocation,
        category: this.searchForm.category.value,
        price: this.searchForm.minprice.value + ',' + this.searchForm.maxprice.value,
        numberOfRooms: this.searchForm.numberrooms.value
      }})
  }

  // refactoring for getting the form controls
  get searchForm() {
    return this.form.controls;
  }
}
