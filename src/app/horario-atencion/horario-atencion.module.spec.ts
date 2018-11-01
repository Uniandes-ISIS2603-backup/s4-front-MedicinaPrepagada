import { HorarioAtencionModule } from './horario-atencion.module';

describe('HorarioAtencionModule', () => {
  let horarioAtencionModule: HorarioAtencionModule;

  beforeEach(() => {
    horarioAtencionModule = new HorarioAtencionModule();
  });

  it('should create an instance', () => {
    expect(horarioAtencionModule).toBeTruthy();
  });
});
