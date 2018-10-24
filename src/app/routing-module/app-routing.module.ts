
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
import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';


const routes: Routes = [
    
    {
        path: 'pacientes',
        children: [
            {
                path: 'list',
                component : PacienteListComponent
            },
            {
                path: ':id',
                component: PacienteDetailComponent
                
            }
        ]
    },
    {
        path: 'medicamentos',
        children: [
            {
                path: 'list',
                component : MedicamentoListComponent
            }
        ]
    },
    {
        path: 'administradores',
        children: [
            {
                path: 'list',
                component : AdministradorListComponent
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
