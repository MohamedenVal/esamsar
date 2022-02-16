import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    apiURLUsers = environment.apiURL + 'users/';

    constructor(private http: HttpClient) {}

    // Getting the Users from the backend
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiURLUsers);
    }

    // Getting a specific catewgory by id
    getSingleUser(userId: string): Observable<User> {
        return this.http.get<User>(`${this.apiURLUsers}${userId}`);
    }

    // Creating a user
    createUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiURLUsers, user);
    }

    // Updating a user
    updateUser(user: User, userId: string): Observable<User> {
        //updating a specific user
        return this.http.put<User>(`${this.apiURLUsers}${userId}`, user);
    }

    // Deleting a user
    deleteUser(userId: string): Observable<any> {
        return this.http.delete<any>(`${this.apiURLUsers}${userId}`);
    }
}
