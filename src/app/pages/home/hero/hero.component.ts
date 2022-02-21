import { Category } from 'src/app/models/category';
import { Component, Input, OnInit } from '@angular/core';
import { Mekane } from '../home.component';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // the list for search is filled by dummy but real content for improving the UX
  mekaneList: Mekane[] = [
    {
      name: "الرياض",
      id: '',
      type: 'mogata'
    },
    {
      name: "عرفات",
      id: '',
      type: 'mogata'
    },
    {
      name:  "توجنين",
      id: '',
      type: 'mogata'
    },
    {
      name: "تفرغ زينه",
      id: '',
      type: 'mogata'
    },
    {
      name: "تيارت",
      id: '',
      type: 'mogata'
    },
    {
      name: "دار النعيم",
      id: '',
      type: 'mogata'
    },
    {
      name:"ملح",
      id: '',
      type: 'mogata'
    },
    {
      name: "بيكه",
      id: '',
      type: 'mogata'
    },
    {
      name: "الميناء",
      id: '',
      type: 'mogata'
    },
    {
      name: "السبخة",
      id: '',
      type: 'mogata'
    },
    {
      name: "انواذيبو",
      id: '',
      type: 'mogata'
    },
    {
      name: "نواكشوط",
      id: '',
      type: 'mogata'
    }
  ];
  categories: Category[] = [];
  rent = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectTypeSearch(): void {
    this.rent = !this.rent;

  }
}
