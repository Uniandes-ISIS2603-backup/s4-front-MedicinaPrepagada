/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  } from '@angular/common/http';
import { Response } from '@angular/http';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map'

const API_URL = environment.apirURL;

@Injectable()
export class AuthenticationService {
    
    public token: string;
    
    constructor(private http: HttpClient) 
    {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean>
    {
        return this.http.post( API_URL, { username: username, password: password })
         .map((response: Response) => {
            let token = response.json() && response.json().token;
            if (token) {

                this.token = token;

                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                return true;
            } else {
                return false;
            }
        });
    }

    logout() 
    {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
    
}
