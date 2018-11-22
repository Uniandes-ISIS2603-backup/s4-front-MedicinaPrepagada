import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog'; 
import {LaboratorioService} from '../laboratorio.service';
import {Laboratorio} from '../laboratorio';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio-list.component.html',
  styleUrls: ['./laboratorio-list.component.css']
})
export class LaboratorioListComponent implements OnInit {

  constructor(
        private laboratorioService: LaboratorioService) { }
    
    laboratorios: Laboratorio[];
    
    
    getLaboratorios(): void {
         this.laboratorioService.getLaboratorios().subscribe(laboratorios => this.laboratorios = laboratorios);
    }
 
  
   

  ngOnInit() {
      this.getLaboratorios();
  }
}
