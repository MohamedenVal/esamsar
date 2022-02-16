import { Wilaya } from './../../../../models/wilaya';
import { LocationsService } from 'src/app/services/locations.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-wilaya-form',
  templateUrl: './wilaya-form.component.html',
  styleUrls: ['./wilaya-form.component.css']
})
export class WilayaFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  paramId = '';

  constructor(
    private formBuilder: FormBuilder,
    private locationService: LocationsService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this._checkEditMode();
  }

  // on button click for submiting creating or editing
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const wilaya: Wilaya = {
      id: this.paramId,
      name: this.wilayaForm.name.value,
    };
    if (this.editMode) {
      this._updateWilaya(wilaya);
    } else {
      this._createWilaya(wilaya);
    }
  }

  // method for creating a ctegory
  private _createWilaya(wilaya: Wilaya) {
    // creating ...
    this.locationService.createWilaya(wilaya).subscribe(
      (Wilaya: Wilaya) => {
        // code show that the action has happened like toast or messaging service
        this.returnBack();
      },
      () => {
        // code show that the action has happened like toast or messaging service
      }
    );
  }

  // method for updating a specific category
  private _updateWilaya(wilaya: Wilaya) {
    // Updating ...
    this.locationService
      .updateWilays(wilaya, this.paramId)
      .subscribe(
        (wilaya: Wilaya) => {
          // code show that the action has happened like toast or messaging service
          this.returnBack();
        },
        () => {
          // code show that the action has happened like toast or messaging service
        }
      );
  }


  // method for cheching if an id was passed so that a category get updated
  private _checkEditMode() {
    // some code
    this.route.params.subscribe((pararms) => {
      if (pararms.id) {
        this.paramId = pararms.id;
        this.editMode = true;
        this.locationService
          .getSingleWilaya(pararms.id)
          .subscribe((category) => {
            this.wilayaForm.name.setValue(category.name);
          });
      }
    });
  }

  // refactoring for getting the form controls
  get wilayaForm() {
    return this.form.controls;
  }

  // Small refactoring here ....
  returnBack() {
    timer(2000)
      .toPromise()
      .then(() => {
        this.location.back();
      });
  }

}
