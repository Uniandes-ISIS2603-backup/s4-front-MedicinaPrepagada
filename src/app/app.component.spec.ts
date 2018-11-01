import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PacienteListComponent} from './paciente/paciente-list/paciente-list.component';
import {MedicamentoListComponent} from './medicamento/medicamento-list/medicamento-list.component';
import {SedeListComponent} from './sede/sede-list/sede-list.component';
import {HorarioAtencionListComponent} from './horario-atencion/horario-atencion-list/horario-atencion-list.component'
import {MedicoListComponent} from './medico/medico-list/medico-list.component';
import {LaboratorioListComponent} from './laboratorio/laboratorio-list/laboratorio-list.component';
import {AdministradorListComponent} from './administrador/administrador-list/administrador-list.component';
import {HistoriaClinicaListComponent} from './historiaClinica/historiaClinica-list/historiaClinica-list.component';
import {OrdenMedicaListComponent} from './ordenMedica/ordenMedica-list/ordenMedica-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PacienteListComponent,
        MedicamentoListComponent,
        LaboratorioListComponent,
        AdministradorListComponent,
        SedeListComponent,
        HorarioAtencionListComponent,
        MedicoListComponent,
        HistoriaClinicaListComponent,
        OrdenMedicaListComponent
        
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
