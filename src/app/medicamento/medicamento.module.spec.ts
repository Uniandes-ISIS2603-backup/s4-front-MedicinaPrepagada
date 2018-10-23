import { MedicamentoModule } from './medicamento.module';

describe('MedicamentoModule', () => {
  let medicamentoModule: MedicamentoModule;

  beforeEach(() => {
    medicamentoModule = new MedicamentoModule();
  });

  it('should create an instance', () => {
    expect(medicamentoModule).toBeTruthy();
  });
});
