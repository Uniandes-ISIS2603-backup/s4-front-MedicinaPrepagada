import { EspecialidadModule } from './especialidad.module';

describe('EspecialidadModule', () => {
  let especialidadModule: EspecialidadModule;

  beforeEach(() => {
    especialidadModule = new EspecialidadModule();
  });

  it('should create an instance', () => {
    expect(especialidadModule).toBeTruthy();
  });
});
