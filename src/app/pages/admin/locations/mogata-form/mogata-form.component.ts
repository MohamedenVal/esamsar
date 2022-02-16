import { Wilaya } from 'src/app/models/wilaya';
import { CategoriesService } from 'src/app/services/categories.service';
import { Mogata } from 'src/app/models/mogata';
import { LocationsService } from 'src/app/services/locations.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';


@Component({
  selector: 'app-mogata-form',
  templateUrl: './mogata-form.component.html',
  styleUrls: ['./mogata-form.component.css']
})
export class MogataFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  locationPramId = '';
  wilayas!: Wilaya[];

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private locationService: LocationsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      wilaya: ['', Validators.required]
    });

    this._getWilayas();
    this._checkEditMode();
  }

  // on button click for submiting creating or editing
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const mogata: Mogata = {
      id: this.locationPramId,
      name: this.mogataForm.name.value,
      wilaya: this.mogataForm.wilaya.value

    };
    if (this.editMode) {
      this._updateMogata(mogata);
    } else {
      this._createMogata(mogata);
    }
  }

  // method for creating a mogata
  private _createMogata(mogata: Mogata) {
    // creating ...
    this.categoriesService.createMogata(mogata).subscribe(
      (category: Mogata) => {
        // code show that the action has happened like toast or messaging service
        this.returnBack();
      },
      () => {
        // code show that the action has happened like toast or messaging service
      }
    );
  }

  // method for updating a specific mogata
  private _updateMogata(mogata: Mogata) {
    // Updating ...
    this.categoriesService
      .updateMogata(mogata, this.locationPramId)
      .subscribe(
        (mogata: Mogata) => {
          // code show that the action has happened like toast or messaging service
          this.returnBack();
        },
        () => {
          // code show that the action has happened like toast or messaging service
        }
      );
  }

  // method for cheching if an id was passed so that a mogata get updated
  private _checkEditMode() {
    // some code
    this.route.params.subscribe((pararms) => {
      if (pararms.id) {
        this.locationPramId = pararms.id;
        this.editMode = true;
        this.categoriesService
          .getSingleMogata(pararms.id)
          .subscribe((mogata) => {
            this.mogataForm.name.setValue(mogata.name);
            this.mogataForm.wilaya.setValue(mogata.wilaya.id);
          });
      }
    });
  }

  // getting wilyas for select input field
  private _getWilayas() {
    this.locationService.getWilayas()
      .subscribe((wilayas) => {
        this.wilayas = wilayas;
      })
  }

  // refactoring for getting the form controls
  get categoryForm() {
    return this.form.controls;
  }
  get mogataForm() {
    return this.form.controls;
  }

  returnBack() {
    timer(2000)
      .toPromise()
      .then(() => {
        this.location.back();
      });
  }
}

