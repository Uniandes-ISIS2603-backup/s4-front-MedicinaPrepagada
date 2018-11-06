import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MedicoService} from '../medico.service';
import {Medico} from '../medico';

/**
 * Componente que crea una medico
 */
@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {

/**
    * Constructor for the component
    * @param medicoService The mediSistemas services provider
    */
  constructor(private medicoService: MedicoService,
                private toastr: ToastrService) { }

/**
 * El nuevo medico
 */
  medico: Medico;
    
  /**
    * The output which tells the parent component
    * that the user no longer wants to create a medico
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * The output which tells the parent component
    * that the user created a new medico
    */
    @Output() create = new EventEmitter();
    
    /**
     * Crea un nuevo medico
     */
    createMedico(): void{
        this.medicoService.createMedico(this.medico)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("El medico fue creado", "Creacion Medico");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    /**
    * Informs the parent component that the user no longer wants to create a medico
    */
    cancelCreation() : void{
        this.cancel.emit();
    }

/**
    * This function will initialize the component
    */
  ngOnInit() {
      this.medico = new Medico();
  }

}
