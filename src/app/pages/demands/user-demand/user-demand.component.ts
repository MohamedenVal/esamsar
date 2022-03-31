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
  editMode = false;
  demandPramId = '';

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

  private _checkEditMode() {
    this.route.params
      .subscribe((pararms) => {
        if (pararms.id) {
          this.editMode = true;
          this.demandsService.getSingleDemand(pararms.id)
            .subscribe((demand) => {
            this.demandForm.title.setValue(demand.title);
            this.demandForm.body.setValue(demand.body);
            this.demandForm.phone.setValue(demand.phone);
            })
        }
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

    if (this.editMode) {
        this._updateDemand(demand);
    } else {
        this._createDemand(demand);
    }
  }

  // method for creating a ctegory
  private _createDemand(demand: Demand) {
    // creating ...
    this.demandsService.createDemand(demand)
      .subscribe((demand) => {
        // code for confermation popups
        this.returnBack();
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

  private _updateDemand(demand: Demand) {
    // Updating ...
    this.demandsService.updateDemand(demand, this.demandPramId)
      .subscribe((demand) => {
        // code for confermation popups or not
        this.returnBack();
      });
  }

   // refactoring for getting the form controls
   get demandForm() {
    return this.form.controls;
  }
}
