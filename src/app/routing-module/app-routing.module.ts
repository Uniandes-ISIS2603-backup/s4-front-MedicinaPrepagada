
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PacienteListComponent} from '../paciente/paciente-list/paciente-list.component';
import {PacienteDetailComponent} from '../paciente/paciente-detail/paciente-detail.component';
import {MedicamentoListComponent} from '../medicamento/medicamento-list/medicamento-list.component';
import {MedicamentoDetailComponent} from '../medicamento/medicamento-detail/medicamento-detail.component';
import {FarmaciaListComponent} from '../farmacia/farmacia-list/farmacia-list.component';
import {FarmaciaDetailComponent} from '../farmacia/farmacia-detail/farmacia-detail.component';
import {ExamenMedicoListComponent} from '../examenmedico/examenmedico-list/examenmedico-list.component';
import {ExamenMedicoDetailComponent} from '../examenmedico/examenmedico-detail/examenmedico-detail.component';
import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {LaboratorioListComponent} from '../laboratorio/laboratorio-list/laboratorio-list.component';
import {LaboratorioDetailComponent} from '../laboratorio/laboratorio-detail/laboratorio-detail.component';
import {LaboratorioCreateComponent} from '../laboratorio/laboratorio-create/laboratorio-create.component';
import {FacturaListComponent} from '../factura/factura-list/factura-list.component';
import {FacturaDetailComponent} from '../factura/factura-detail/factura-detail.component';
import {FacturaCreateComponent} from '../factura/factura-create/factura-create.component';
import {CitaLaboratorioListComponent} from '../citalaboratorio/citalaboratorio-list/citalaboratorio-list.component';
import {CitaLaboratorioDetailComponent} from '../citalaboratorio/citalaboratorio-detail/citalaboratorio-detail.component';
import {AdministradorDetailComponent} from '../administrador/administrador-detail/administrador-detail.component';
import {SedeListComponent} from '../sede/sede-list/sede-list.component';
import {SedeDetailComponent} from '../sede/sede-detail/sede-detail.component';
import {SedeCreateComponent} from '../sede/sede-create/sede-create.component';
import {HorarioAtencionListComponent} from '../horario-atencion/horario-atencion-list/horario-atencion-list.component';
import {HorarioAtencionDetailComponent} from '../horario-atencion/horario-atencion-detail/horario-atencion-detail.component';
import {HorarioAtencionCreateComponent} from '../horario-atencion/horario-atencion-create/horario-atencion-create.component';

import {MedicoListComponent} from '../medico/medico-list/medico-list.component';
import {MedicoCreateComponent} from '../medico/medico-create/medico-create.component';
import {MedicoDetailComponent} from '../medico/medico-detail/medico-detail.component';
import {EspecialidadListComponent} from '../especialidad/especialidad-list/especialidad-list.component';
import {EspecialidadCreateComponent} from '../especialidad/especialidad-create/especialidad-create.component';
import {EspecialidadDetailComponent} from '../especialidad/especialidad-detail/especialidad-detail.component';
import {CitaMedicaListComponent} from '../cita-medica/cita-medica-list/cita-medica-list.component';
import {CitaMedicaCreateComponent} from '../cita-medica/cita-medica-create/cita-medica-create.component';
import {CitaMedicaDetailComponent} from '../cita-medica/cita-medica-detail/cita-medica-detail.component';
import {HistoriaClinicaListComponent} from '../historiaClinica/historiaClinica-list/historiaClinica-list.component';
import {HistoriaClinicaDetailComponent} from '../historiaClinica/historiaClinica-detail/historiaClinica-detail.component';
import {OrdenMedicaListComponent} from '../ordenMedica/ordenMedica-list/ordenMedica-list.component';
import {OrdenMedicaDetailComponent} from '../ordenMedica/ordenMedica-detail/ordenMedica-detail.component';
import {TarjetaCreditoListComponent} from '../tarjeta-credito/tarjeta-credito-list/tarjeta-credito-list.component';
import {TarjetaCreditoDetailComponent} from '../tarjeta-credito/tarjeta-credito-detail/tarjeta-credito-detail.component';
import {PacienteCreateComponent} from '../paciente/paciente-create/paciente-create.component';
import {AdministradorCreateComponent} from '../administrador/administrador-create/administrador-create.component';
import {HistoriaClinicaCreateComponent} from '../historiaClinica/historiaClinica-create/historiaClinica-create.component';
import {OrdenMedicaCreateComponent} from '../ordenMedica/ordenMedica-create/ordenMedica-create.component';
import {PacienteTarjetascreditoComponent} from '../paciente/paciente-tarjetascredito/paciente-tarjetascredito.component';
import {PacienteCitaslaboratorioComponent} from '../paciente/paciente-citaslaboratorio/paciente-citaslaboratorio.component';
import {PacienteFacturasComponent} from '../paciente//paciente-facturas/paciente-facturas.component';
import {PacienteCitasmedicasComponent} from '../paciente/paciente-citasmedicas/paciente-citasmedicas.component';
import {PacienteHistoriasclinicasComponent} from '../paciente/paciente-historiasclinicas/paciente-historiasclinicas.component';
import {PacienteTarjetaCreditoAddComponent} from '../paciente/paciente-tarjeta-credito-add/paciente-tarjeta-credito-add.component';





const routes: Routes = [
    
    {
        path: 'pacientes',
        children: [
                        {
                path: 'list',
                component : PacienteListComponent
            },
            {
                path:'add',
                component: PacienteCreateComponent
            },
                {
                path: ':id',
                component: PacienteDetailComponent
            },
            { path:':id/tarjetascredito/add',
                component: PacienteTarjetaCreditoAddComponent
            },
            { path:':id/tarjetascredito',
            component: PacienteTarjetascreditoComponent
            },
            {
                path:':id/citaslaboratorio',
                component: PacienteCitaslaboratorioComponent
            },
            {
                path:':id/facturas',
                component: PacienteFacturasComponent
            },
            {
                path:':id/citasmedicas',
                component: PacienteCitasmedicasComponent
            },
            {
                path:':id/historiasclinicas',
                component: PacienteHistoriasclinicasComponent
            }
            
        ]
    },
    {
        path: 'medicamentos',
        children: [
            {
                path: 'list',
                component : MedicamentoListComponent
            },
            {
                path: ':id',
                component: MedicamentoDetailComponent
                
            }
        ]
    },
    {
        path: 'farmacias',
        children: [
            {
                path: 'list',
                component : FarmaciaListComponent
            },
            {
                path: ':id',
                component: FarmaciaDetailComponent
                
            }
        ]
    },
    {
        path: 'examenesMedicos',
        children: [
            {
                path: 'list',
                component : ExamenMedicoListComponent
            },
            {
                path: ':id',
                component: ExamenMedicoDetailComponent
                
            }
        ]
    },
    {
        path:'citalaboratorio',
        children:[
            {
                path:'list',
                component: CitaLaboratorioListComponent
            },
            {
                path: ':id',
                component:CitaLaboratorioDetailComponent
            }
        ]
    },
    {
        path: 'laboratorios',
        children: [
            {
                path: 'list',
                component : LaboratorioListComponent
            },
            {
                path:'add',
                component: LaboratorioCreateComponent
            },
            {
                path:':id',
                component:LaboratorioDetailComponent
            }
        ]
    },
    {
        path:'facturas',
        children: [
            {
                path:'list',
                component: FacturaListComponent
            },
            {
                path:'add',
                component: FacturaCreateComponent
            }
            {
                path:':idFactura',
                component:FacturaDetailComponent
            }
        ]
    },
    {
        path: 'administradores',
        children: [
            {
                path: 'list',
                component : AdministradorListComponent
            },
            {
                path:'create',
                component: AdministradorCreateComponent
            },
            {
                path: ':id',
                component: AdministradorDetailComponent
                
            }
        ]
    },
    {
        path: 'sedes',
        children: [
            {
                path: 'list',
                component : SedeListComponent
            },{
                path: 'add',
                component: SedeCreateComponent
            },
            {
                path: ':id',
                component: SedeDetailComponent
                
            }
        ]
    },
    {
        path: 'horariosAtencion',
        children: [
            {
                path: 'list',
                component: HorarioAtencionListComponent
            },
             {
                path: 'add',
                 component: HorarioAtencionCreateComponent
            },
            {
                path: ':id',
                component: HorarioAtencionDetailComponent
                
            }
        ]
    },
    {
        path: 'medicos',
        children: [
            {
                path: 'list',
                component : MedicoListComponent
            },
            {
                path:'create',
                component: MedicoCreateComponent
            },
            {
                path: ':id',
                component: MedicoDetailComponent
//                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'especialidades',
        children: [
            {
                path: 'list',
                component : EspecialidadListComponent
            },
            {
                path:'create',
                component: EspecialidadCreateComponent
            },
            {
                path: ':id',
                component: EspecialidadDetailComponent
                
            }
        ]
    },
    {
        path: 'citasMedicas',
        children: [
            {
                path: 'list',
                component : CitaMedicaListComponent
            },
            {
                path:'create',
                component: CitaMedicaCreateComponent
            },
            {
                path: ':id',
                component: CitaMedicaDetailComponent
                
            }
        ]
    },
    {
        path: 'historiasClinicas',
        children: [
            {
                path: 'list',
                component : HistoriaClinicaListComponent
            },
            {
                path:'create',
                component: HistoriaClinicaCreateComponent
            },
            {
                path: ':id',
                component: HistoriaClinicaDetailComponent
                
            }
        ]
    },
    {
        path: 'ordenesMedicas',
        children: [
            {
                path: 'list',
                component : OrdenMedicaListComponent
            },
            {
                path:'create',
                component: OrdenMedicaCreateComponent
            },
            {
                path: ':id',
                component: OrdenMedicaDetailComponent
                
            }
        ]
    },
    {
        path: 'tarjetascredito',
        children:[
            {
                path:'list',
                component: TarjetaCreditoListComponent
            },
            {
                path: ':id',
                component: TarjetaCreditoDetailComponent
            }
        ]
    }
    
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{
    
}
