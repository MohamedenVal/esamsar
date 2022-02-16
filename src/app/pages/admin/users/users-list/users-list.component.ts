import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getUsers();
  }

  deleteUser(userId: string) {
    // confermation for delete action
    this.usersService.deleteUser(userId)
    .subscribe(
      () => {
        this._getUsers();
        //action needs to be shown
    });
  }

  updateUser(userId: string) {
    this.router.navigateByUrl(`admin/users/form/${userId}`);
  }
  private _getUsers() {
    this.usersService.getUsers().subscribe((cats) => {
      this.users = cats;
    });
  }
}
