/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {HistoriaClinicaModule} from './historiaClinica.module';

describe('HistoriaClinicaModule', () => {
    let historiaClinicaModule: HistoriaClinicaModule;

    beforeEach(() => {
        historiaClinicaModule = new HistoriaClinicaModule();
    });

    it('should create an instance', () => {
        expect(historiaClinicaModule).toBeTruthy();
    });
});
