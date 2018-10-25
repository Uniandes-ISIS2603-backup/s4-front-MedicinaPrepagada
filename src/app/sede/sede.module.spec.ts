import { SedeModule } from './sede.module';

describe('SedeModule', () => {
  let sedeModule: SedeModule;

  beforeEach(() => {
    sedeModule = new SedeModule();
  });

  it('should create an instance', () => {
    expect(sedeModule).toBeTruthy();
  });
});
