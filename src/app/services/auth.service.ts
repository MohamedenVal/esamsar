import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiUserURL = environment.apiURL + 'users';
    constructor(
        private http: HttpClient,
        private tokenService: LocalstorageService,
        private router: Router
    ) {}

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${this.apiUserURL}/login`, {
            email,
            password
        });
    }

    logout() {
        this.tokenService.removeToken();
        this.router.navigate(['/login']);
    }


}
