/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import {Administrador} from './administrador';

const API_URL = '../../assets/';
const administradores = '/administradores.json';

@Injectable()
export class AdministradorService
{    
    constructor (private http: HttpClient) {}
    
    getAdministradores() : Observable<Administrador[]>
    {
        return this.http.get<Administrador[]> (API_URL + administradores);
    }
}

