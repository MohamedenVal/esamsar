import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/models/property';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {


  properties: Property[] = [];
  mogataPage = false;
  wilayaPage = false;
  rent = false;
  mogatas: string[] = [];
  cats: string[] = [];
  price: string[] = [];

  constructor(
    private propertyService: PropertiesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParamMap.get("mogata") !== '') {
      this.mogatas = this.route.snapshot.queryParamMap.get("mogata")!.split(',');
    }
    if (this.route.snapshot.queryParamMap.get("category") !== '') {
      this.cats = this.route.snapshot.queryParamMap.get("category")!.split(',');
      // console.log(this.route.snapshot.queryParamMap.get("category"))
    }
    if (this.route.snapshot.queryParamMap.has("price")) {
      this.price = this.route.snapshot.queryParamMap.get("price")!.split(',');
    }

    this._getSearchResult(this.cats, this.mogatas, this.price)
  }

  private _getSearchResult(cats?: string[], mogata?: string[], price?: string[]) {
    this.propertyService.getProperties(cats, mogata, price)
      .subscribe( (p) => {
        this.properties = p
      })
  }
}
