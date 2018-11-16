/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { IngresoModule } from './ingreso.module';

describe('IngresoModule', () => {
  let ingresoModule: IngresoModule;

  beforeEach(() => {
    ingresoModule = new IngresoModule();
  });

  it('should create an instance', () => {
    expect(ingresoModule).toBeTruthy();
  });
});
