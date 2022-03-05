import { PropertiesService } from 'src/app/services/properties.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Property } from 'src/app/models/property';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { Router } from '@angular/router';


export interface Mekane {
  name: string;
  id: string;
  type: 'wilaya' | 'mogata';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  form!: FormGroup;
  properties: Property[] = [];
  numProperties: number = 6;
  propsParams= '';
  message = '';
  // markers

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private propertiesService: PropertiesService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      type: [''],
      area: [''],
      details: [''],
      sell: [true]
    });
    this._getProperties();
  }

  private _getProperties(): void {
    this.propertiesService.getFeaturedProperties(this.numProperties)
      .subscribe( (response) => {
        this.properties = response;
      })
  }

  onSubmit() {
    this.message = `اسم المستخدم:${this.requestFrom.username}\n
        رقم الهاتف: ${this.requestFrom.phone}\n
        النوعية: ${this.requestFrom.type}\n
        المساحات: ${this.requestFrom.area}\n
        التفاصيل: ${this.requestFrom.detail}\n`

        window.location.href=`https://api.whatsapp.com/send?phone=22222312929text='${this.message}`;
  }

  get requestFrom() {
    return this.form.controls;
  }
}


