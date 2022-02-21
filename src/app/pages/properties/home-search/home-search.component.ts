import { LocationsService } from 'src/app/services/locations.service';
import { Mekane } from '../../home/home.component';
import { Category } from 'src/app/models/category';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

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
  priceRanges = [
    { id: "1", value: "500", label: "<1مليون"},
    { id: "2", value: "500 - 1", label: "1-2 "},
    { id: "3", value: "1 - 2", label: "2-5"},
    { id: "4", value: "2 - 5", label: "5-10"},
    { id: "5", value: "1", label: "مليون 15"}
  ]


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
      priceRange: [''],
      numberOfRooms: ['']
    });
    this._getLocations();
    this.getCategories();
  }

  search(querry: any ): void {
    console.log(querry);
    this.resultList = [];
    this.searchResult = true;
    this.mekaneList.forEach( listItem => {
      if(listItem.name.includes(querry)) {
        this.resultList.push(listItem);
      }
    });
    console.log(this.resultList)

    if(querry === '' || this.resultList === []) {
      this.resultList = [];
      this.searchResult = false;
    }

  }

  hideList(): void {
    this.searchResult = false;
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
    this.searchType = (this.rent) ? "rent" : "sell";

    this.router.navigate(
      [`/properties/${this.searchType}`],
      {queryParams: {
        location: this.searchForm.location.value,
        propertyCategory: this.searchForm.category.value,
        priceRange: this.searchForm.priceRange.value,
        numberOfRooms: this.searchForm.numberOfRooms.value
      }})
  }

  // refactoring for getting the form controls
  get searchForm() {
    return this.form.controls;
  }
}
