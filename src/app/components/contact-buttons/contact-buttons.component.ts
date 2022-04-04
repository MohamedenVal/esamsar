import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-buttons',
  templateUrl: './contact-buttons.component.html',
  styleUrls: ['./contact-buttons.component.css']
})
export class ContactButtonsComponent implements OnInit {

  @Input() message = 'لا معل،مات حول العقار';

  constructor() { }

  ngOnInit(): void {
  }

}
