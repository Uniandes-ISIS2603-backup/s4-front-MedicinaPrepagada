import { CitaMedicaModule } from './cita-medica.module';

describe('CitaMedicaModule', () => {
  let citaMedicaModule: CitaMedicaModule;

  beforeEach(() => {
    citaMedicaModule = new CitaMedicaModule();
  });

  it('should create an instance', () => {
    expect(citaMedicaModule).toBeTruthy();
  });
});
