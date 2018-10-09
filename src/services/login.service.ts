import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    validateLogin(user: User) {
        return this.http.post(`${environment.apiBaseUrl}/login`, user).toPromise();
    }
}
