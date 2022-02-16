import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  categoryPramId = '';

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

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
    const category: Category = {
      id: this.categoryPramId,
      name: this.categoryForm.name.value,
    };
    if (this.editMode) {
      this._updateCategory(category);
    } else {
      this._createCategory(category);
    }
  }

  // method for creating a ctegory
  private _createCategory(category: Category) {
    // creating ...
    this.categoriesService.createCategory(category).subscribe(
      (category: Category) => {
        // code show that the action has happened like toast or messaging service
        this.returnBack();
      },
      () => {
        // code show that the action has happened like toast or messaging service
      }
    );
  }

  // method for updating a specific category
  private _updateCategory(category: Category) {
    // Updating ...
    this.categoriesService
      .updateCategory(category, this.categoryPramId)
      .subscribe(
        (category: Category) => {
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
        this.categoryPramId = pararms.id;
        this.editMode = true;
        this.categoriesService
          .getSingleCategory(pararms.id)
          .subscribe((category) => {
            this.categoryForm.name.setValue(category.name);
          });
      }
    });
  }

  // refactoring for getting the form controls
  get categoryForm() {
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
