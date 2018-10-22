import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoListComponent } from './medico-list/medico-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MedicoListComponent],
  exports:[MedicoListComponent]
})
export class MedicoModule { }
