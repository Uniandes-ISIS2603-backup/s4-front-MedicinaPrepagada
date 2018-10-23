import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicamentoListComponent } from './medicamento-list/medicamento-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MedicamentoListComponent],
  exports:[MedicamentoListComponent],
    providers: [MedicamentoService]

})
export class MedicamentoModule { }
