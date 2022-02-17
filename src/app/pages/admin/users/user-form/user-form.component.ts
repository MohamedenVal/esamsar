import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  userPramId = '';

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._checkEditMode();
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const user: User = {
      id: this.userPramId,
      name: this.userForm.name.value,
      email: this.userForm.email.value,
      password: this.userForm.password.value,
      phone: this.userForm.phone.value,
      isAdmin: this.userForm.isAdmin.value,
      city: this.userForm.city.value,
    };
    if (this.editMode) {
      this._updateUser(user);
    } else {
      console.log('hey there step before creating!');
      this._createUser(user);
    }
  }

  // method for creating a users
  private _createUser(user: User) {
    // creating ...
    this.usersService.createUser(user).subscribe(
      //notification implementation
      (user) => {
        // notification
        this.returnBack();
      }
    );
  }

  // method for updating a specific user
  private _updateUser(user: User) {
    // Updating ...
    this.usersService.updateUser(user, this.userPramId).subscribe(
      (user: User) => {
        //Notification implementation
        this.returnBack();
      }
    );
  }

  // enttializing the form
  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      isAdmin: [false, Validators.required],
      city: ['']
    });
  }
  // method for cheching if an id was passed so that a user get updated
  private _checkEditMode() {
    // some code
    this.route.params.subscribe((pararms) => {
      if (pararms.id) {
        this.userPramId = pararms.id;
        this.editMode = true;
        this.usersService.getSingleUser(pararms.id).subscribe((user) => {
          this.userForm.name.setValue(user.name);
          this.userForm.email.setValue(user.email);
          this.userForm.phone.setValue(user.phone);
          this.userForm.isAdmin.setValue(user.isAdmin);
          this.userForm.city.setValue(user.city);

          this.userForm.password.setValidators([]);
          this.userForm.password.updateValueAndValidity();
        });
      }
    });
  }

  // refactoring for getting the form controls
  get userForm() {
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
