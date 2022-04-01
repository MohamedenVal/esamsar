import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { DemandsService } from 'src/app/services/demands.service';
import { Demand } from 'src/app/models/demand.model';

@Component({
  selector: 'app-user-demand',
  templateUrl: './user-demand.component.html',
  styleUrls: ['./user-demand.component.css']
})
export class UserDemandComponent implements OnInit {

  form!: FormGroup;
  isSubmitted = false;
  demandPramId = '';
  sucessMsg = false;
  failMsg = false;

  constructor(
    private formBuilder: FormBuilder,
    private demandsService: DemandsService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }



  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const demand: Demand = {
      id: this.demandPramId,
      title: this.demandForm.title.value,
      body: this.demandForm.body.value,
      phone: this.demandForm.phone.value
    };

    this._createDemand(demand);

  }

  // method for creating a ctegory
  private _createDemand(demand: Demand) {
    // creating ...
    this.demandsService.createUserDemand(demand)
      .subscribe((demand) => {
        // code for confermation popups
        this.sucessMsg = true;
        this.returnBack();
      }, () => {
        this.failMsg = false;
      });
  }

  // Return to previous page
  returnBack() {
    timer(2000)
      .toPromise()
      .then(() => {
        this.location.back();
      });
  }

   // refactoring for getting the form controls
   get demandForm() {
    return this.form.controls;
  }
}
