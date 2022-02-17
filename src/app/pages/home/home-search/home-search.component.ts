import { Mekane } from './../home.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  @Input() mekaneList: Mekane[] = [];

  searchResult = false;

  resultList: Mekane[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  search(querry: any ): void {
    this.resultList = [];
    this.searchResult = true;
    this.mekaneList.forEach( listItem => {
      if(listItem.name.includes(querry.value)) {
        this.resultList.push(listItem);
      }
    });

    if(querry.value === '' || this.resultList === []) {
      this.resultList = [];
      this.searchResult = false;
    }

  }

  hideList(): void {
    // this.searchResult = false;
  }

}
