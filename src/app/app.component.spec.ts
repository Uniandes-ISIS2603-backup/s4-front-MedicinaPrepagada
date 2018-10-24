import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PacienteListComponent} from './paciente/paciente-list/paciente-list.component';
import {MedicamentoListComponent} from './medicamento/medicamento-list/medicamento-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PacienteListComponent,
        MedicamentoListComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 's4-front-MedicinaPrepagada'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('s4-front-MedicinaPrepagada');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to s4-front-MedicinaPrepagada!');
  }));
});
