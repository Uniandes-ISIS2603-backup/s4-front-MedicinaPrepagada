import { CitaLaboratorioModule } from './citalaboratorio.module';

describe('CitalaboratorioModule', () => {
  let citalaboratorioModule: CitaLaboratorioModule;

  beforeEach(() => {
    citalaboratorioModule = new CitaLaboratorioModule();
  });

  it('should create an instance', () => {
    expect(citalaboratorioModule).toBeTruthy();
  });
});
