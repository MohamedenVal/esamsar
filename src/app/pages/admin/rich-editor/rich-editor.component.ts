import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'admin-rich-editor',
  templateUrl: './rich-editor.component.html',
  styleUrls: ['./rich-editor.component.css']
})
export class RichEditorComponent implements OnInit {

  rteValue!: string;
  rte: any;


  constructor() { }

  ngOnInit(): void {
    console.log(this.rte);

  }

}
