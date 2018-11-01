import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {environment} from '../../environments/environment'; 
import 'rxjs/add/operator/catch';

import { Sede } from './sede';

const API_URL = environment.apirURL;
const sedes = '/sedes';
const sedeDetail = '/sedeDetails';


@Injectable()
export class SedeService{
    
    constructor (private http: HttpClient) {}
    
    getSedes() : Observable<Sede[]>{
        return this.http.get<Sede[]> (API_URL + sedes);
    }
    
      
    getSede(sedeId): Observable<Sede>
    {
        return this.http.get<Sede>(API_URL + sedes+ '/' + sedeId ).catch(err => this.handleError(err));
    }

    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}


