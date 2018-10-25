import { LaboratorioModule } from './laboratorio.module';

describe('LaboratorioModule', () => {
  let laboratorioModule: LaboratorioModule;

  beforeEach(() => {
    laboratorioModule = new LaboratorioModule();
  });

  it('should create an instance', () => {
    expect(laboratorioModule).toBeTruthy();
  });
});
