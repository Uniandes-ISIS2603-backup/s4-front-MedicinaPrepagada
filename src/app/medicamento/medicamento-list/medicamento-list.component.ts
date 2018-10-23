import { Component, OnInit } from '@angular/core';
import {MedicamentoService} from '../medicamento.service';
import {Medicamento} from '../medicamento';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento-list.component.html',
  styleUrls: ['./medicamento-list.component.css']
})
export class MedicamentoListComponent implements OnInit {

    constructor(private medicamentoService: MedicamentoService) { }
    
    medicamentos: Medicamento[];
    
    getMedicamentos(): void {
        this.medicamentoService.getMedicamentos()
            .subscribe(medicamentos => this.medicamentos = medicamentos);
    }

  ngOnInit() {
      this.getMedicamentos();
  }

}

