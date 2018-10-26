/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {OrdenMedicaModule} from './ordenMedica.module';

describe('OrdenMedicaModule', () => {
    let ordenMedicaModule: OrdenMedicaModule;

    beforeEach(() => {
        ordenMedicaModule = new OrdenMedicaModule();
    });

    it('should create an instance', () => {
        expect(ordenMedicaModule).toBeTruthy();
    });
});

