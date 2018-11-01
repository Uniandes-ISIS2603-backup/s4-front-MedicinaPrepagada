import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {MedicamentoService} from '../medicamento.service';
import { ToastrService } from 'ngx-toastr';

import {Medicamento} from '../medicamento';
import {MedicamentoDetail} from '../medicamento-detail';



@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento-list.component.html',
  styleUrls: ['./medicamento-list.component.css']
})
export class MedicamentoListComponent implements OnInit {

    constructor(
        private medicamentoService: MedicamentoService) { }
    
    /**
    * The list of medicamentos which belong to the BookStore
    */
    medicamentos: Medicamento[];

    /**
    * Shows or hides the medicamento-create-component
    */
    showCreate: boolean;
    
    /**
    * The id of the medicamento that the user wants to view
    */
    medicamento_id: number;
    
    /**
     * the medicamento that the user views.
     */
    selectedMedicamento : Medicamento;
    
    getMedicamentos(): void {
        this.medicamentoService.getMedicamentos()
            .subscribe(medicamentos => this.medicamentos = medicamentos);
    }
    
      onSelected(medicamento_id: number):void {
        this.medicamento_id = medicamento_id;
        this.selectedMedicamento = new MedicamentoDetail();
        this.getMedicamentoDetail();     
    }
    
    getMedicamentoDetail(): void {
        this.medicamentoService.getMedicamentoDetail(this.medicamento_id)
            .subscribe(selectedMedicamento => {
                this.selectedMedicamento = selectedMedicamento
            });
     }

  ngOnInit() {
      this.getMedicamentos();
  }
  
  /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedMedicamento) {
            this.selectedMedicamento = undefined;
            this.medicamento_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

}

