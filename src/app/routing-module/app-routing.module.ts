
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
import {ExamenMedicoLaboratorioComponent } from '../examenmedico/examenmedico-laboratorio/examenmedico-laboratorio.component';
import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {LaboratorioListComponent} from '../laboratorio/laboratorio-list/laboratorio-list.component';
import {LaboratorioDetailComponent} from '../laboratorio/laboratorio-detail/laboratorio-detail.component';
import {LaboratorioCreateComponent} from '../laboratorio/laboratorio-create/laboratorio-create.component';
import {LaboratorioEditComponent} from '../laboratorio/laboratorio-edit/laboratorio-edit.component';
import {FacturaListComponent} from '../factura/factura-list/factura-list.component';
import {FacturaDetailComponent} from '../factura/factura-detail/factura-detail.component';
import {FacturaCreateComponent} from '../factura/factura-create/factura-create.component';
import {FacturaEditComponent} from '../factura/factura-edit/factura-edit.component';

import {CitaLaboratorioListComponent} from '../citalaboratorio/citalaboratorio-list/citalaboratorio-list.component';
import {CitaLaboratorioDetailComponent} from '../citalaboratorio/citalaboratorio-detail/citalaboratorio-detail.component';
import {AdministradorDetailComponent} from '../administrador/administrador-detail/administrador-detail.component';
import {SedeListComponent} from '../sede/sede-list/sede-list.component';
import {SedeDetailComponent} from '../sede/sede-detail/sede-detail.component';
import {SedeCreateComponent} from '../sede/sede-create/sede-create.component';
import {HorarioAtencionListComponent} from '../horario-atencion/horario-atencion-list/horario-atencion-list.component';
import {HorarioAtencionDetailComponent} from '../horario-atencion/horario-atencion-detail/horario-atencion-detail.component';
import {HorarioAtencionCreateComponent} from '../horario-atencion/horario-atencion-create/horario-atencion-create.component';
import {SedeAddConsultorioComponent} from '../sede/sede-add-consultorio/sede-add-consultorio.component';
import {SedeEditComponent} from '../sede/sede-edit/sede-edit.component';
import {ConsultorioDetailComponent} from '../sede/consultorio-detail/consultorio-detail.component';
import {ConsultorioEditComponent} from '../sede/consultorio-edit/consultorio-edit.component';


import {MedicoListComponent} from '../medico/medico-list/medico-list.component';
import {MedicoCreateComponent} from '../medico/medico-create/medico-create.component';
import {MedicoDetailComponent} from '../medico/medico-detail/medico-detail.component';
import {MedicoEditComponent} from '../medico/medico-edit/medico-edit.component';
import {EspecialidadListComponent} from '../especialidad/especialidad-list/especialidad-list.component';
import {EspecialidadCreateComponent} from '../especialidad/especialidad-create/especialidad-create.component';
import {EspecialidadDetailComponent} from '../especialidad/especialidad-detail/especialidad-detail.component';
import {EspecialidadEditComponent} from '../especialidad/especialidad-edit/especialidad-edit.component';
import {CitaMedicaListComponent} from '../cita-medica/cita-medica-list/cita-medica-list.component';
import {CitaMedicaCreateComponent} from '../cita-medica/cita-medica-create/cita-medica-create.component';
import {CitaMedicaDetailComponent} from '../cita-medica/cita-medica-detail/cita-medica-detail.component';
import {CitaMedicaEditComponent} from '../cita-medica/cita-medica-edit/cita-medica-edit.component';
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
import {PacienteEditComponent} from '../paciente/paciente-edit/paciente-edit.component';
import {AdministradorEditComponent} from '../administrador/administrador-edit/administrador-edit.component';
import {HistoriaClinicaEditComponent} from '../historiaClinica/historiaClinica-edit/historiaClinica-edit.component';
import {OrdenMedicaEditComponent} from '../ordenMedica/ordenMedica-edit/ordenMedica-edit.component';
import {LoginComponent} from '../ingreso/ingreso-login/ingreso-login.component';
import {RegisterComponent} from '../ingreso/ingreso-register/ingreso-register.component';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {MedicamentoFarmaciaComponent} from '../medicamento/medicamento-farmacia/medicamento-farmacia.component';
import {MedicamentoFarmaciaAddComponent} from '../medicamento/medicamento-farmacia-add/medicamento-farmacia-add.component';
import {ExamenMedicoLaboratorioAddComponent} from '../examenmedico/examenmedico-laboratorio-add/examenmedico-laboratorio-add.component';
import {HistoriasOrdenMedicaComponent} from '../historiaClinica/historiaClinica-ordenesmedicas/historiaClinica-ordenesmedicas.component';




const routes: Routes = [
    
    {
        path: 'pacientes',
        children: [
                        {
                path: 'list',
                component : PacienteListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO' ]
                    }
                }

            },
            {
                path:'add',
                component: PacienteCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO','PACIENTE']
                    }
                }
            },
                {
                path: ':id',
                component: PacienteDetailComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO','PACIENTE' ]
                    }
                }
            },
            {
              path: ':id/edit',
              component: PacienteEditComponent,
              canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }  
            },
            { 
                path:':id/tarjetascredito/add',
                component: PacienteTarjetaCreditoAddComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PACIENTE']
                    }
                }
            },
            { path:':id/tarjetascredito',
            component: PacienteTarjetascreditoComponent,
            canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PACIENTE' ]
                    }
                }
            },
            {
                path:':id/citaslaboratorio',
                component: PacienteCitaslaboratorioComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
            },
            {
                path:':id/facturas',
                component: PacienteFacturasComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PACIENTE' ]
                    }
                }
            },
            {
                path:':id/citasmedicas',
                component: PacienteCitasmedicasComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
            },
            {
                path:':id/historiasclinicas',
                component: PacienteHistoriasclinicasComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
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
                component: MedicamentoDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },
            {
                path: ':id/farmacias',
                component: MedicamentoFarmaciaComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },
            { 
                path:':id/farmacias/add',
                component: MedicamentoFarmaciaAddComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'MEDICO' ]
                    }
                }
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
                component: FarmaciaDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            }
        ]
    },
    {
        path: 'examenesMedicos',
        children: [
            {
                path: 'list',
                component : ExamenMedicoListComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
            },
            {
                path: ':id',
                component: ExamenMedicoDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },
            {
                path: ':id/laboratorios',
                component: ExamenMedicoLaboratorioComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },
            { 
                path:':id/laboratorios/add',
                component: ExamenMedicoLaboratorioAddComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'MEDICO' ]
                    }
                }
            }
        ]
    },
    {
        path:'citalaboratorio',
        children:[
            {
                path:'list',
                component: CitaLaboratorioListComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
            },
            {
                path: ':id',
                component:CitaLaboratorioDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
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
                path:'create',
                component: LaboratorioCreateComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            },
            {
                path:':id',
                component:LaboratorioDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
            },
            {
                path:':id/update',
                component:LaboratorioEditComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            }
        ]
    },
    {
        path:'facturas',
        children: [
            {
                path:'list',
                component: FacturaListComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','PACIENTE' ]
                    }
                }
            },
            {
                path:'add',
                component: FacturaCreateComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            },
            {
                path:':idFactura',
                component:FacturaDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PACIENTE' ]
                    }
                }
            },
            {
                path:':idFactura/update',
                component:FacturaEditComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PACIENTE' ]
                    }
                }
            }
        ]
    },
    {
        path: 'administradores',
        children: [
            {
                path: 'list',
                component : AdministradorListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path:'create',
                component: AdministradorCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },          
            {
                path: ':id',
                component: AdministradorDetailComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
                
            },
            {
                path: ':id/edit',
                component: AdministradorEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            }
        ]
    },
    {
        path: 'sedes',
        children: [
            {
                path: 'list',
                component : SedeListComponent,
                 canActivate: [NgxPermissionsGuard]
                
            },{
                path: 'add',
                component: SedeCreateComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            },
            
            {
                path: ':id/edit',
                component: SedeEditComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
                
            },
            {
                path: ':id/consultorios/add',
                component: SedeAddConsultorioComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
                
            },{
                path: ':id/consultorios/update/:idConsultorio',
                component: ConsultorioEditComponent
                
            }, 
            {
                path: ':id/consultorios/:idConsultorio',
                component: ConsultorioDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },{
                path: ':id/consultorios/update/:idConsultorio',
                component: ConsultorioEditComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
                
            },
            {
                path: ':id',
                component: SedeDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },
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
                 component: HorarioAtencionCreateComponent,
                  canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO' ]
                    }
                }
            },
            {
                path: ':id',
                component: HorarioAtencionDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
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
                component: MedicoCreateComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            },
            {
                path: ':id',
                component: MedicoDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
//                runGuardsAndResolvers: 'always'
            },
            {
              path: ':id/edit',
              component: MedicoEditComponent  ,
               canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
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
                component: EspecialidadCreateComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            },
            {
                path: ':id',
                component: EspecialidadDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },
            {
              path: ':id/edit',
              component: EspecialidadEditComponent  ,
               canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            }
        ]
    },
    {
        path: 'citasMedicas',
        children: [
            {
                path: 'list',
                component : CitaMedicaListComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
            },
            {
                path:'create',
                component: CitaMedicaCreateComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            },
            {
                path: ':id',
                component: CitaMedicaDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },
            {
              path: ':id/edit',
              component: CitaMedicaEditComponent  ,
               canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            }
        ]
    },
    {
        path: 'historiasClinicas',
        children: [
            {
                path: 'list',
                component : HistoriaClinicaListComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
            },
            {
                path:'create',
                component: HistoriaClinicaCreateComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            },
            {
                path: ':id',
                component: HistoriaClinicaDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },
            {
                path: ':id/edit',
                component: HistoriaClinicaEditComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            },
            {
                path:':id/historiasclinicas',
                component: HistoriasOrdenMedicaComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
            }
            
        ]
    },
    {
        path: 'ordenesMedicas',
        children: [
            {
                path: 'list',
                component : OrdenMedicaListComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
            },
            {
                path:'create',
                component: OrdenMedicaCreateComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            },   
            {
                path: ':id',
                component: OrdenMedicaDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','MEDICO', 'PACIENTE' ]
                    }
                }
                
            },
            {
                path: ':id/edit',
                component: OrdenMedicaEditComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN' ]
                    }
                }
            }
        ]
    },
    {
        path: 'tarjetascredito',
        children:[
            {
                path:'list',
                component: TarjetaCreditoListComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PACIENTE' ]
                    }
                }
            },
            {
                path: ':id',
                component: TarjetaCreditoDetailComponent,
                 canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PACIENTE' ]
                    }
                }
            }
        ]
    }, 
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    
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
