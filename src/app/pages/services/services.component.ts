import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Mogata } from 'src/app/models/mogata';
import { PropertiesService } from 'src/app/services/properties.service';
import { CategoriesService } from 'src/app/services/categories.service'
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/models/property';
import { timer } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  propertyPramId = '';
  categories!: Category[];
  mogatas!: Mogata[];
  imageDisplay!: string | ArrayBuffer | null | undefined;
  imagesPreview!: string[] | ArrayBuffer | null | undefined;
  sucessMsg = false;
  failMsg = false;
  submitWait = false;
  forSell = true;

  message = 'السلام عليكم, انا مهتم باضافة عقارات الى موقعكم';

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
        image: [''],
        isFeatured: [false],
        sell: [this.forSell],
        rent: [!this.forSell],
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
    this.submitWait = true;
    if (this.form.invalid) {
      // this.isSubmitted = false;
      this.submitWait = false;
      return;
    }
    const propertyFormData = new FormData();

    Object.keys(this.propertyForm).map((key) => {
      propertyFormData.append(key, this.propertyForm[key].value);
    });

    this._createUserProperty(propertyFormData);

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
        formImages.append('images', element);
    }

    this.propertiesService
      .uploadPropertyImages(formImages, this.propertyPramId)
      .subscribe(
          (property: Property) => {
            // code for confermatio popup
          // this.returnBack();s
          });
    }

  // method for creating a ctegory
  private _createUserProperty(propertyFormData: FormData) {
    // creating ...
    this.propertiesService.createUserProperty(propertyFormData).subscribe(
      (property: Property) => {
      // code for confermation popups
      this.sucessMsg = true;
      this.submitWait = false;
      this.returnBack();
      },
      () => {
        this.failMsg = true;
        this.submitWait = false;
      }
    );
  }

  // Return to previous page
  returnBack() {
    timer(3000)
      .toPromise()
      .then(() => {
        this.location$.back();
      });
  }

  // refactoring for getting the form controls
  get propertyForm() {
    return this.form.controls;
  }

}
