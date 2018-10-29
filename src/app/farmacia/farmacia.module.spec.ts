import { FarmaciaModule } from './farmacia.module';

describe('FarmaciaModule', () => {
  let farmaciaModule: FarmaciaModule;

  beforeEach(() => {
    farmaciaModule = new FarmaciaModule();
  });

  it('should create an instance', () => {
    expect(farmaciaModule).toBeTruthy();
  });
});
