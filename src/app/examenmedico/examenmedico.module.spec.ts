import { ExamenMedicoModule } from './examenmedico.module';

describe('ExamenMedicoModule', () => {
  let examenmedicoModule: ExamenMedicoModule;

  beforeEach(() => {
    examenmedicoModule = new ExamenMedicoModule();
  });

  it('should create an instance', () => {
    expect(examenmedicoModule).toBeTruthy();
  });
});
