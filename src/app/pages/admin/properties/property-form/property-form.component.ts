import { PropertiesService } from 'src/app/services/properties.service';
import { CategoriesService } from 'src/app/services/categories.service'
import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Mogata } from 'src/app/models/mogata';
import { Property } from 'src/app/models/property';
// import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';


@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css'],
  // providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class PropertyFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  propertyPramId = '';
  categories!: Category[];
  mogatas!: Mogata[];
  imageDisplay!: string | ArrayBuffer | null | undefined;
  imagesPreview!: string[] | ArrayBuffer | null | undefined;

  // @ViewChild('fromRTE')
    // private rteEle!: RichTextEditorComponent;

  constructor(
    private propertiesService: PropertiesService,
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private location$: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._getCategoriesAndMogatas();
    this._checkEditMode();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        phone: ['', Validators.required],
        room: [''],
        category: ['', Validators.required],
        mogata: ['', Validators.required],
        description: [''],
        location: [''],
        address: [''],
        image: ['', Validators.required],
        isFeatured: [false],
        sell: [true]
    });
  }

  private _getCategoriesAndMogatas() {
    this.categoriesService.getCategories().subscribe((categories) => {
        this.categories = categories;
    });

    this.categoriesService.getMogatas().subscribe(
      (mogatas) => {
        this.mogatas = mogatas;
      }
    )
  };

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const propertyFormData = new FormData();

    Object.keys(this.propertyForm).map((key) => {
        propertyFormData.append(key, this.propertyForm[key].value);
    });

    if (this.editMode) {
        this._updateProperty(propertyFormData);
    } else {
        this._createProperty(propertyFormData);
    }
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
        this.form.patchValue({ image: file });
        this.form.get('image')?.updateValueAndValidity();
        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.imageDisplay = fileReader.result;
        };
        fileReader.readAsDataURL(file);
    }
  }

  imagesUpload(event: any) {
    const files = event.target.files;

    const formImages = new FormData();
    for (let index = 0; index < files.length; index++) {
        const element = files[index];

        console.log(element);
        formImages.append('images', element);
    }

    this.propertiesService
      .uploadPropertyImages(formImages, this.propertyPramId)
      .subscribe(
          (property: Property) => {
            // code for confermatio popup
          this.returnBack();
          });
    }

  // method for creating a ctegory
  private _createProperty(propertyFormData: FormData) {
    // creating ...
    this.propertiesService.createProperty(propertyFormData).subscribe(
      (property: Property) => {
      // code for confermation popups
      this.returnBack();
      }
    );
    }

  private _updateProperty(propertyFormData: FormData) {
    // Updating ...
    this.propertiesService
      .updateProperty(propertyFormData, this.propertyPramId)
      .subscribe(
        (property: Property) => {
          // code for confermation popups or not
          this.returnBack();
        }
      );
  }

  // Return to previous page
  returnBack() {
    timer(2000)
      .toPromise()
      .then(() => {
        this.location$.back();
      });
  }

  private _checkEditMode() {
    // some code
    this.route.params.subscribe((pararms) => {
      if (pararms.id) {
        this.propertyPramId = pararms.id;
        this.editMode = true;
        this.propertiesService
          .getSingleProperty(pararms.id)
          .subscribe((property: Property) => {
            this.propertyForm.name.setValue(property.name);
            this.propertyForm.category.setValue(
                property.category.id
            );
            this.propertyForm.mogata.setValue(
                property.mogata.id
            );
            this.propertyForm.price.setValue(property.price);
            this.propertyForm.phone.setValue(property.phone);
            this.propertyForm.room.setValue(property.room);
            this.propertyForm.isFeatured.setValue(
                property.isFeatured
            );
            this.propertyForm.sell.setValue(
                property.sell
            );
            this.propertyForm.description.setValue(
                property.description
            );
            this.propertyForm.address.setValue(
              property.address
            );
            this.propertyForm.location.setValue(
              property.location
            );
            this.imageDisplay = property.image;
            this.propertyForm.image.setValidators([]);
            this.propertyForm.image.updateValueAndValidity();
          });
      }
    });
  }

  // refactoring for getting the form controls
  get propertyForm() {
    return this.form.controls;
  }
}
