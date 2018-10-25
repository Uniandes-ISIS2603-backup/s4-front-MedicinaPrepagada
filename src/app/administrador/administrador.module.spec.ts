/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {AdministradorModule} from './administrador.module';

describe('AdministradorModule', () => {
    let administradorModule: AdministradorModule;

    beforeEach(() => {
        administradorModule = new AdministradorModule();
    });

    it('should create an instance', () => {
        expect(administradorModule).toBeTruthy();
    });
});

