import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { Demand } from 'src/app/models/demand.model';
import { DemandsService } from 'src/app/services/demands.service';

@Component({
  selector: 'app-demand-form',
  templateUrl: './demand-form.component.html',
  styleUrls: ['./demand-form.component.css']
})
export class DemandFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  demandPramId = '';
  user = false;

  constructor(
    private formBuilder: FormBuilder,
    private demandsService: DemandsService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let data = this.route.snapshot.data;
    this.user = data.user;
    this._initForm();
    this._checkEditMode();
  }

  private _initForm() {
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
          this.demandPramId = pararms.id;
          this.editMode = true;
          if(this.user){
            this.demandsService.getSingleUserDemand(pararms.id)
              .subscribe((demand) => {
                this.demandForm.title.setValue(demand.title);
                this.demandForm.body.setValue(demand.body);
                this.demandForm.phone.setValue(demand.phone);
              });
          } else {
            this.demandsService.getSingleDemand(pararms.id)
              .subscribe((demand) => {
                this.demandForm.title.setValue(demand.title);
                this.demandForm.body.setValue(demand.body);
                this.demandForm.phone.setValue(demand.phone);
              });
          }

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
    if(this.user){
      this.demandsService.createUserDemand(demand)
      .subscribe((demand) => {
        // code for confermation popups
        this.returnBack();
      });
    } else {
      this.demandsService.createDemand(demand)
      .subscribe((demand) => {
        // code for confermation popups
        this.returnBack();
      });
    }
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
    if(this.user){
      this.demandsService.updateUserDemand(demand, this.demandPramId)
      .subscribe((demand) => {
        // code for confermation popups or not
        this.returnBack();
      });
    } else {
      this.demandsService.updateDemand(demand, this.demandPramId)
      .subscribe((demand) => {
        // code for confermation popups or not
        this.returnBack();
      });
    }

  }


  // refactoring for getting the form controls
  get demandForm() {
    return this.form.controls;
  }
}
