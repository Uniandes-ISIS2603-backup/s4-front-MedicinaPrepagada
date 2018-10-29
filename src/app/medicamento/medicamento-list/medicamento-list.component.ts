import { Component, OnInit } from '@angular/core';
import {MedicamentoService} from '../medicamento.service';
import {Medicamento} from '../medicamento';
import {MedicamentoDetail} from '../medicamento-detail';


@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento-list.component.html',
  styleUrls: ['./medicamento-list.component.css']
})
export class MedicamentoListComponent implements OnInit {

    constructor(private medicamentoService: MedicamentoService) { }
    
    medicamentos: Medicamento[];
    medicamento_id: number;
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

}

