/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PacienteListComponent} from '../paciente/paciente-list/paciente-list.component';
import {MedicamentoListComponent} from '../medicamento/medicamento-list/medicamento-list.component';


const routes: Routes = [
    
    {
        path: 'pacientes',
        children: [
            {
                path: 'list',
                component : PacienteListComponent
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
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{
    
}