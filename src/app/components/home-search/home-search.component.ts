import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  searchResult = false;
  list: string[] = [];

  resultList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.list = [
      "الرياض",
      "عرفات",
      "تفرغ زينه",
      "تيارت",
      "دار النعيم",
      "توجنين",
      "ملح",
      "بيكه",
      "الميناء",
      "السبخة",
      "انواذيبو",
      "نواكشوط"
    ]
  }

  search(querry: any ): void {
    this.resultList = [];
    this.searchResult = true;
    this.list.forEach( listItem => {
      if(listItem.includes(querry.value)) {
        this.resultList.push(listItem);
      }
    });

    if(querry.value === '' || this.resultList === []) {
      this.resultList = [];
      this.searchResult = false;
    }

  }

}
